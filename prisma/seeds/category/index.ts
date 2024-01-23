import { PrismaClient, Prisma } from '@prisma/client'
import { getTypeOfTransactionBySlug } from '../typeOfTransactions'
export async function expensesCategorySeed(prisma: PrismaClient): Promise<void> {
  const typeOfTransaction = await getTypeOfTransactionBySlug(prisma, 'expense')

  const categories: Prisma.CategoryCreateManyInput[] = [
    {
      name: 'Alimentação',
      slug: 'alimentacao',
      type_of_transaction_id: typeOfTransaction.id
    },{
      name: 'Assinaturas',
      slug: 'assinaturas',
      type_of_transaction_id: typeOfTransaction.id
    },{
      name: 'Casa',
      slug: 'casa',
      type_of_transaction_id: typeOfTransaction.id
    },{
      name: 'Supermercado',
      slug: 'supermercado',
      type_of_transaction_id: typeOfTransaction.id
    },{
      name: 'Cuidados pessoais',
      slug: 'cuidados-pessoais',
      type_of_transaction_id: typeOfTransaction.id
    },{
      name: 'Dívidas e empréstimos',
      slug: 'dividas-e-emprestimos',
      type_of_transaction_id: typeOfTransaction.id
    },{
      name: 'Educação',
      slug: 'educacao',
      type_of_transaction_id: typeOfTransaction.id
    },{
      name: 'Investimentos',
      slug: 'investimentos',
      type_of_transaction_id: typeOfTransaction.id
    },{
      name: 'Lazer',
      slug: 'lazer',
      type_of_transaction_id: typeOfTransaction.id
    },{
      name: 'Saúde',
      slug: 'saude',
      type_of_transaction_id: typeOfTransaction.id
    },{
      name: 'Transporte',
      slug: 'transporte',
      type_of_transaction_id: typeOfTransaction.id
    },
  ]

  await prisma.category.createMany({
    data: categories
  })
}

export async function incomesCategorySeed(prisma: PrismaClient): Promise<void> {
  const typeOfTransaction = await getTypeOfTransactionBySlug(prisma,'income')

  const categories: Prisma.CategoryCreateManyInput[] = [
    {
      name: 'Investimento',
      slug: 'investimento',
      type_of_transaction_id: typeOfTransaction.id
    }, {
      name: 'Salário',
      slug: 'salario',
      type_of_transaction_id: typeOfTransaction.id
    }
  ]

  await prisma.category.createMany({
    data: categories
  })
}