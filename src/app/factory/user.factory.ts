import { UserUsecase } from '@/app/usecase/user.usecase'
import { UserRepository } from '@/app/repository/user.repository'
import { UserController } from '@/app/controller/user.controller'

export class UserFactory {
  private readonly userUsecase: UserUsecase
  private readonly userRepository: UserRepository
  private readonly userController: UserController

  constructor () {
    this.userRepository = new UserRepository()
    this.userUsecase = new UserUsecase(this.userRepository)
    this.userController = new UserController(this.userUsecase)
  }

  public controllerFactory() {
    return this.userController
  }
}
