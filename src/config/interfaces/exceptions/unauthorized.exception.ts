type IErrors = {
  message?: string
}

export class UnauthorizedException extends Error {
  statusCode: number
  errors?: Array<IErrors>

  constructor(message = 'Ocorreu uma falha na requisição', errors?: Array<IErrors>) {
    super(message)
    this.message = message
    this.errors = errors
    this.statusCode = 401
  }
}
