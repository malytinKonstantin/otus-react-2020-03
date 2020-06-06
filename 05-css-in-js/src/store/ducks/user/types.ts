export type User = {
  login: string
  password: string
}

export type InitialState = {
  isAuthorized: boolean
  isAuthorizing: boolean
  data: null | User
  error: null | string
}
