import React, { Component } from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import { Nav } from '@components/nav'
import { AuthPage } from '@/pages/auth'
import { routes } from '@/routes'
import { UserLogin } from './utils'
import type { childrenRenderProps } from './utils'

export const App: FC<{}> = () => {
  const Pages = () => (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  )

  return (
    <UserLogin>
      {(renderProps: childrenRenderProps) => {
        const { isAuthorized, isAuthorizing, login, logout, user } = renderProps

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
      }}
    </UserLogin>
  )
}
