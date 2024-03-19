import { PrismaClient, BankAccountEnum } from '@prisma/client'

export async function getBankAccountByType(prisma: PrismaClient, type: BankAccountEnum): Promise<number> {
  const data = await prisma.bankAccount.findFirst({
    where: {
      type
    }
  })

  return data.id
}

export async function bankAccountSeed(prisma: PrismaClient): Promise<void> {
  await prisma.bankAccount.createMany({
    data: [
      {
        name: 'Conta Corrente',
        type: 'CHECKING'
      }, {
        name: 'Conta Poupança',
        type: 'SAVINGS'
      }, {
        name: 'Carteira',
        type: 'WALLET'
      }
    ]
  })
}