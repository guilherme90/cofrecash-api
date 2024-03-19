import bcrypt from 'bcrypt'

export function encryptPassword(value: string): string {
  const salt = bcrypt.genSaltSync(12)
  return bcrypt.hashSync(value, salt)
}

export function comparePassword(plainPassword: string, hash: string): boolean {
  return bcrypt.compareSync(plainPassword, hash)
}
