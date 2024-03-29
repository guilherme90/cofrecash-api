import { Request, Response, NextFunction } from 'express'
import { validator } from '@/config/interfaces/middlewares'

import { z } from 'zod'

export function transactionCreateValidator (request: Request, response: Response, next: NextFunction) {
  const constraints = z.object({
    user_id: z.number({
      required_error: 'Usuário é obrigatório',
      invalid_type_error: 'Usuário inválido'
    }),
    bank_account_id: z.number({
      required_error: 'Conta bancária é obrigatório',
      invalid_type_error: 'Conta bancária inválida'
    }),
    type_transaction_id: z.number({
      required_error: 'Tipo de transação é obrigatório',
      invalid_type_error: 'Tipo de transação inválido'
    }),
    category_id: z.number({
      required_error: 'Usuário é obrigatório',
      invalid_type_error: 'Usuário inválido'
    }),
    title: z.string({
      required_error: 'O título é obrigatório'
    }),
    description: z.string({
      required_error: 'O título é obrigatório'
    }).optional().nullable(),
    value_transaction: z.number({
      required_error: 'Informe o valor da transação',
      invalid_type_error: 'Valor inválido'
    }),
    due_date: z.date({
      required_error: 'A data é obrigatória',
      invalid_type_error: 'Data inválida'
    })
  })

  return validator(constraints, request.body, response, next)
}
