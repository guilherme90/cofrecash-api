import { IErrors } from '@/config/interfaces/exceptions'
import { HttpStatus } from '@/config/interfaces/http-status'

export class UnauthorizedException extends Error {
  statusCode: number
  errors?: Array<IErrors>

  constructor(message = 'Acesso não autorizado', errors?: Array<IErrors>) {
    super(message)
    this.message = message
    this.errors = errors
    this.statusCode = HttpStatus.UNAUTHORIZED
  }
}
