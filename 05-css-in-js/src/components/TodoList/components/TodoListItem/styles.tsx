import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const Title = styled.div`
  color: #000;
`

const ButtonBase = css`
  &:active {
    outline: none;
    box-shadow: none;
  }
`

export const ButtonToActive = styled.button`
  ${ButtonBase}
  background-color: green;
`

export const ButtonToDone = styled.button`
  ${ButtonBase}
  background-color: yellow;
`
