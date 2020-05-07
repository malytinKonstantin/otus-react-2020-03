import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;

  & * {
    margin-right: 15px;
  }
`
export const TextField = styled.input`
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid #afafaf;
`
export const Button = styled.button`
  border: none;
  color: #fff;
  background: #1d96ff;
  padding: 5px 15px;
  border-radius: 3px;
`

export const ButtonReset = styled.button`
  ${Button} {
  }
`

export const ButtonSubmit = styled.button`
  ${Button} {
  }
`
