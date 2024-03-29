import { NextFunction, Response } from 'express'
import { ZodTypeAny } from 'zod'

export function validator(
  zod: ZodTypeAny,
  data: object,
  response: Response,
  next: NextFunction
): Response | void {
  const payload: any = zod.safeParse(data)

  if (!payload.success) {
    return response.status(422).json({
      message: 'Dados inválidos',
      errors: payload.error.issues.map((item) => ({
        field: item.path.join('.'),
        message: item.message
      }))
    })
  }

  next()
}
