import { UserUsecase } from '@/app/usecase'
import { UserRepository } from '@/app/repository'
import { UserController } from '@/app/controller'

export class UserFactory {
  private readonly userUseCase: UserUsecase
  private readonly userRepository: UserRepository
  private readonly userController: UserController

  constructor () {
    this.userRepository = new UserRepository()
    this.userUseCase = new UserUsecase(this.userRepository)
    this.userController = new UserController(this.userUseCase)
  }

  public controllerFactory() {
    return this.userController
  }
}
