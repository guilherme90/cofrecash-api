import { TransactionController } from '@/app/controller'

export class TransactionFactory {
  private readonly controller: TransactionController

  public constructor () {
    this.controller = new TransactionController()
  }

  public controllerFactory(): TransactionController {
    return this.controller
  }
}
