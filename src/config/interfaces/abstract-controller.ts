import { Response } from 'express'
import { HttpStatus } from '@/config/interfaces/http-status'

export abstract class AbstractController {
  protected successResponse(
    response: Response,
    body: any,
    statusCode = HttpStatus.OK
  ): Response {
    return response.status(statusCode).send(body)
  }

  protected failureResponse(response: Response, error: Error | any): Response {
    const { message, statusCode, errors } = error
    return response.status(statusCode || HttpStatus.INTERNAL_SERVER_ERROR).send({
      message,
      errors
    })
  }
}
