import { IRouter } from 'express'
import { TransactionFactory } from '@/app/factory/transaction/transaction.factory'
import { transactionCreateValidator } from '@/app/controller/transaction/validator'

const transactionController = new TransactionFactory().controllerFactory()

export function transactionRoutes(router: IRouter): IRouter {
  router.post('/', transactionCreateValidator, transactionController.create)

  return router
}
