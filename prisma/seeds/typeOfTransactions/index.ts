import { PrismaClient } from '@prisma/client'

export async function getTypeOfTransactionBySlug(prisma: PrismaClient, slug: string | null): Promise<{ id: number }> {
  const payload = await prisma.typeOfTransaction.findFirst({
    where: {
      slug: slug
    },
    select: { id: true }
  })

  return { id: payload.id }
}

export async function typeOfTransactionsSeed(prisma: PrismaClient): Promise<void> {
  await prisma.typeOfTransaction.createMany({
    data: [
      {
        name: 'Expense',
        slug: 'expense'
      },{
        name: 'Income',
        slug: 'income'
      }
    ]
  })
}