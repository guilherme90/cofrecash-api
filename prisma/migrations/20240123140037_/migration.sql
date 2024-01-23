-- CreateTable
CREATE TABLE `bank_account` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('WALLET', 'SAVINGS', 'CHECKING') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bank_account_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `bank_account_id` INTEGER NOT NULL,

    UNIQUE INDEX `bank_account_user_user_id_key`(`user_id`),
    UNIQUE INDEX `bank_account_user_bank_account_id_key`(`bank_account_id`),
    UNIQUE INDEX `bank_account_user_user_id_bank_account_id_key`(`user_id`, `bank_account_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `bank_account_user` ADD CONSTRAINT `bank_account_user_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bank_account_user` ADD CONSTRAINT `bank_account_user_bank_account_id_fkey` FOREIGN KEY (`bank_account_id`) REFERENCES `bank_account`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
