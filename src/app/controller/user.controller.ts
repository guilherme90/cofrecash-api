import { AbstractController } from '@/config/interfaces/abstract-controller'
import { UserUsecase } from '@/app/usecase/user.usecase'
import { Request, Response } from 'express'

export class UserController extends AbstractController {
  constructor (private readonly userUsecase: UserUsecase) {
    super()
  }

  public signup = async (request: Request, response: Response) => {
    try {
      const user = await this.userUsecase.signup(request.body)
      return this.successResponse(response, user)
    } catch (e) {
      return this.failureResponse(response, e)
    }
  }

  public signIn = async (request: Request, response: Response) => {
    try {
      const user = await this.userUsecase.signIn(request.body)
      return this.successResponse(response, user)
    } catch (e) {
      return this.failureResponse(response, e)
    }
  }
}
