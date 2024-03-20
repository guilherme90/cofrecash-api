import { HttpStatus } from '@/config/interfaces/http-status'
import { IErrors } from '@/config/interfaces/exceptions'

export class BadRequestException extends Error {
  statusCode: number
  errors?: Array<IErrors>

  constructor(message = 'Ocorreu uma falha na requisição', errors?: Array<IErrors>) {
    super(message)
    this.message = message
    this.errors = errors
    this.statusCode = HttpStatus.BAD_REQUEST
  }
}
