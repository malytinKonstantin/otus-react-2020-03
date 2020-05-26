import React, { Component } from 'react'

export interface UserLoginArgs {
  login: string
  password: string
}

export interface CurrentUser extends UserLoginArgs {}

interface UserLoginProps {
  children(props: childrenRenderProps): React.ReactNode
}

interface UserLoginState {
  isAuthorized: boolean
  isAuthorizing: boolean
}

export interface childrenRenderProps {
  isAuthorized: boolean
  isAuthorizing: boolean
  login(user: UserLoginArgs): void
  logout(): void
  user: CurrentUser | null
}

export class UserLogin extends Component<UserLoginProps, UserLoginState> {
  private USER_KEY = 'user'

  constructor(props: UserLoginProps) {
    super(props)

    this.state = {
      isAuthorized: this.getIsAuthorized(),
      isAuthorizing: false,
    }
  }

  getIsAuthorized = (): boolean => {
    return Boolean(localStorage.getItem(this.USER_KEY))
  }

  getUser = (): CurrentUser | null => {
    const user = this.getIsAuthorized()
      ? (JSON.parse(
          localStorage.getItem(this.USER_KEY) as string,
        ) as CurrentUser)
      : null
    return user
  }

  login = (user: UserLoginArgs): void => {
    this.setState({ isAuthorizing: true })
    setTimeout(() => {
      localStorage.setItem(this.USER_KEY, JSON.stringify(user))
      this.setState({ isAuthorizing: false, isAuthorized: true })
    }, 3000)
  }

  logout = (): void => {
    localStorage.removeItem(this.USER_KEY)
    this.setState({ isAuthorized: false })
  }

  render() {
    const { isAuthorized, isAuthorizing } = this.state
    const renderProps = {
      isAuthorized,
      isAuthorizing,
      login: this.login,
      logout: this.logout,
      user: this.getUser(),
    }
    return this.props.children(renderProps)
  }
}
