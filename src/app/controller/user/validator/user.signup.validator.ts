import { Request, Response, NextFunction } from 'express'
import { validator } from '@/config/interfaces/middlewares/validators.middleware'

import { z } from 'zod'

export function userSignupValidator(request: Request, response: Response, next: NextFunction) {
  const constraints = z.object({
    name: z.string().min(5, 'O nome deve contér no mínimo 5 caracteres'),
    email: z.string().email('E-mail inválido'),
    password: z.string().min(8, 'A senha deve contér no mínimo 8 caracteres')
  })

  return validator(constraints, request.body, response, next)
}
