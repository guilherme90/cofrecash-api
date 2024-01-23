import { PrismaClient } from '@prisma/client'
import { typeOfTransactionsSeed } from './seeds/typeOfTransactions'
import { expensesCategorySeed, incomesCategorySeed } from './seeds/category'
import { userSeed } from './seeds/user'
import { bankAccountSeed } from './seeds/bankAccounts'

(async () => {
  const prisma = new PrismaClient()

  await typeOfTransactionsSeed(prisma)
  await expensesCategorySeed(prisma)
  await incomesCategorySeed(prisma)
  await userSeed(prisma)
  await bankAccountSeed(prisma)
})()
