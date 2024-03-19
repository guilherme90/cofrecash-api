import { IRouter } from 'express'
import { userRoutes } from '@/config/routes/user.routes'

export default (router: IRouter): void => {
  router.use('/users', userRoutes(router))
}
