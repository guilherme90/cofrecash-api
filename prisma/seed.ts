import { prisma } from '../src/db'

import { typeOfTransactionsSeed } from './seeds/typeOfTransactions'
import { expensesCategorySeed, incomesCategorySeed } from './seeds/category'
import { userSeed } from './seeds/user'
import { bankAccountSeed } from './seeds/bankAccounts'

(async () => {
  await typeOfTransactionsSeed(prisma)
  await expensesCategorySeed(prisma)
  await incomesCategorySeed(prisma)
  await userSeed(prisma)
  await bankAccountSeed(prisma)
})()
