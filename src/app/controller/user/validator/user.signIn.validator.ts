import { z } from 'zod'
import { Request, Response, NextFunction } from 'express'

import { validator } from '@/config/interfaces/middlewares'


export function userSignInValidator(request: Request, response: Response, next: NextFunction) {
  const constraints = z.object({
    email: z.string().email('E-mail inválido'),
    password: z.string().min(8, 'A senha deve contér no mínimo 8 caracteres')
  })

  return validator(constraints, request.body, response, next)
}
