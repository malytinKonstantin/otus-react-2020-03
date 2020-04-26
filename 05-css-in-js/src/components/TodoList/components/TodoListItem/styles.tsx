import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const Wrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const Title = styled.div`
  font-family: monospace;
  font-size: 16px;
  color: #000;
  display: flex;
  cursor: pointer;
`

export const Checkbox = styled.div`
  width: 16px;
  flex-basis: 6px;
  min-width: 16px;
  height: 16px;
  border: 1px solid blue;
  border-radius: 3px;
  margin-right: 10px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background-color: ${({ isCompleted }) =>
      isCompleted ? 'blue' : 'transparent'};
  }

  &:hover {
    cursor: pointer;
  }
`

const ButtonBase = css`
  border: none;
  color: #fff;
  padding: 3px 10px;
  border-radius: 3px;

  &:active {
    outline: none;
    box-shadow: none;
  }
`

export const Button = styled.button`
  ${ButtonBase}
  background-color: #0eb902;
`

export const ButtonRemove = styled.button`
  ${ButtonBase}
  background-color: #ec2c2c;
  margin-left: 10px;
`
