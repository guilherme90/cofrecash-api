import { AbstractController } from '@/config/interfaces/abstract-controller'
import { Request, Response } from 'express'
import { HttpStatus } from '@/config/interfaces/http-status'

export class TransactionController extends AbstractController {
  constructor () {
    super()
  }

  public create = async (request: Request, response: Response) => {
    try {
      return this.successResponse(response, {}, HttpStatus.CREATED)
    } catch (e) {
      return this.failureResponse(response, e)
    }
  }

  public update = async (request: Request, response: Response) => {
    try {
      return this.successResponse(response, {}, HttpStatus.OK)
    } catch (e) {
      return this.failureResponse(response, e)
    }
  }

  public get = async (request: Request, response: Response) => {
    try {
      return this.successResponse(response, {}, HttpStatus.OK)
    } catch (e) {
      return this.failureResponse(response, e)
    }
  }
}
