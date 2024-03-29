import { TransactionController } from '@/app/controller'
import { TransactionUsecase } from '@/app/usecase'

export class TransactionFactory {
  private readonly controller: TransactionController

  public constructor () {
    this.controller = new TransactionController(new TransactionUsecase())
  }

  public controllerFactory(): TransactionController {
    return this.controller
  }
}
