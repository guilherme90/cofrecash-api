import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

export async function userSeed(prisma: PrismaClient): Promise<void> {
  const hash = bcrypt.hashSync('password', 10)

  await prisma.user.createMany({
    data: [{
      name: 'Usuário teste',
      email: 'usuario.teste@gmail.com',
      password: hash
    }]
  })
}