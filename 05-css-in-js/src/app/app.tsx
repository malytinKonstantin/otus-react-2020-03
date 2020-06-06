import React, { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Nav } from '@components/nav'
import { AuthPage } from '@/pages/auth'
import { routes } from '@/routes'
import type { ConnectProps } from './AppContainer'

interface AppProps extends ConnectProps {}

export const App: FC<AppProps> = (props) => {
  const { isAuthorized, isAuthorizing, login, logout, user } = props

  const Pages = () => (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  )

  if (isAuthorizing) {
    return <div>loading...</div>
  }

  return isAuthorized ? (
    <>
      <Nav onLogout={logout} user={user} />
      <Pages />
    </>
  ) : (
    <>
      <Redirect to="/" />
      <AuthPage onLogin={login} />
    </>
  )
}
