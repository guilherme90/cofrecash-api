import { prisma } from '@/db'

import { UserSignupInput } from '@/app/dto/user/user.dto'
import { User, Prisma } from '@prisma/client'

export class UserRepository {
  async findBy(field: string, value: string, returnFields: Prisma.UserSelect = null): Promise<User | null> {
    const args: Prisma.UserFindFirstArgs = {
      where: {
        [field]: value
      }
    }

    if (returnFields) {
      args.select = returnFields
    }

    return await prisma.user.findFirst(args)
  }

  async signup(data: UserSignupInput): Promise<User> {
    return await prisma.user.create({
      data
    })
  }
}
