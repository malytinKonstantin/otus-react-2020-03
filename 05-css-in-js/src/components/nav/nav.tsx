import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '@/routes'
import { CurrentUser } from '@/routes//utils'
import { NavWrapper, NavList, User, UserName } from './styles'

interface NavProps {
  onLogout(): void
  user: CurrentUser | null
}

export const Nav = (props: NavProps) => {
  const { onLogout, user } = props

  return (
    <NavWrapper>
      <NavList>
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.label}</Link>
          </li>
        ))}
      </NavList>
      {user && (
        <User>
          <UserName>login: {user.login}</UserName>
          <button type="button" onClick={onLogout}>
            выйти
          </button>
        </User>
      )}
    </NavWrapper>
  )
}
