export type UserSignupInput = {
  name: string
  email: string
  password: string
}

export type UserSignInInput = {
  email: string
  password: string
}

export type UserSignInOutput = {
  id: number
  name: string
  email: string
  token: string
}
