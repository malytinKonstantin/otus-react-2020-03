import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const NavWrapper = styled.nav`
  display: flex;
  margin-bottom: 30px;
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;

  & > * {
    margin-right: 15px;
  }
`

export const User = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`

export const UserName = styled.div`
  margin-right: 15px;
`
