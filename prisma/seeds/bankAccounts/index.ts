import { PrismaClient } from '@prisma/client'

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