import jwt from 'jsonwebtoken'
import env from '@/config/env'

export function generateToken(payload: any): string {
  const options: any = {
    issuer: env.appName,
    audience: payload.email,
    subject: 'Cofre Cash API'
  }

  if (env.jwt.expiresIn) {
    options.expiresIn = env.jwt.expiresIn
  }

  return jwt.sign({ data: payload }, env.jwt.secret, options)
}
