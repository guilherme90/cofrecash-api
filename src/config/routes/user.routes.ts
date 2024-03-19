import { IRouter } from 'express'
import { UserFactory } from '@/app/factory/user.factory'
import { userSignupValidator, userSignInValidator } from '@/app/controller/validator/user'

const controller = new UserFactory().controllerFactory()

export function userRoutes(router: IRouter): IRouter {
  router.post('/signup', userSignupValidator, controller.signup)
  router.post('/signin', userSignInValidator, controller.signIn)

  return router
}
