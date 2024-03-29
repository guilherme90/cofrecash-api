import { User } from '@prisma/client'

import { BadRequestException, UnauthorizedException } from '@/config/interfaces/exceptions'

import { UserSignupInput, UserSignInInput, UserSignInOutput } from '@/app/dto/user/user.dto'
import { UserRepository } from '@/app/repository/user/user.repository'
import { comparePassword, encryptPassword } from '@/utils/password'
import { generateToken } from '@/utils/token'

export class UserUsecase {
  constructor (private readonly userRepository: UserRepository) {}

  async signup(data: UserSignupInput): Promise<User> {
    const alreadyExists = await this.userRepository.findBy('email', data.email)

    if (alreadyExists) {
      throw new BadRequestException('Este e-mail já está sendo utilizado')
    }

    data.password = encryptPassword(data.password)
    return this.userRepository.signup(data)
  }

  async signIn(data: UserSignInInput): Promise<UserSignInOutput> {
    const user = await this.userRepository.findBy('email', data.email, {
      id: true,
      name: true,
      email: true,
      password: true
    })

    if (!user) {
      throw new UnauthorizedException('E-mail ou senha inválidos')
    }

    if (!comparePassword(data.password, user.password)) {
      throw new UnauthorizedException('E-mail ou senha inválidos')
    }

    delete user.password
    return {
      ...user,
      token: generateToken(user)
    }
  }
}
