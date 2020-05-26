import React from 'react'
import { UserLogin } from './user-login'
import { mount } from 'enzyme'

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

describe('<UserLogin />', () => {
  let isAuthorized = false
  let isAuthorizing = false
  let login = null
  let logout = null
  let user = null
  const userMock = {
    login: 'jfsjf',
    password: 'asdr',
  }

  const wrapper = mount(
    <UserLogin>
      {(renderProps) => {
        isAuthorized = renderProps.isAuthorized
        isAuthorizing = renderProps.isAuthorizing
        login = renderProps.login
        logout = renderProps.logout
        user = renderProps.user
        return null
      }}
    </UserLogin>,
  )

  it('login', async () => {
    login(userMock)
    expect(isAuthorizing).toBe(true)
    // задержка имитирует ответ сервера
    await delay(4000)
    expect(user.login).toBe(userMock.login)
    expect(user.password).toBe(userMock.password)
    expect(isAuthorized).toBe(true)
  })

  it('logout', () => {
    logout()
    expect(user).toBe(null)
    expect(isAuthorized).toBe(false)
  })
})
