import { IRouter } from 'express'
import { userRoutes } from '@/config/routes'
import { transactionRoutes } from '@/config/routes'

export default (router: IRouter): void => {
  router.use('/users', userRoutes(router))
  router.use('/transactions', transactionRoutes(router))
}
