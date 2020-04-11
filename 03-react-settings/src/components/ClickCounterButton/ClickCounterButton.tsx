import React from 'react'

interface Props {
  increment: () => void
  children?: number
}

export const ClickCounterButton: React.FC<Props> = ({
  increment,
  children = 0,
}) => <button onClick={increment}>Clicked {children} times!</button>
