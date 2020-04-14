import React from 'react'

interface Props {
  /**
   * onClick handler
   */
  increment: () => void
  /**
   * children element
   */

  children?: number
}

/**
 * some custom description
 */
export const ClickCounterButton: React.FC<Props> = ({
  increment,
  children = 0,
}) => <button onClick={increment}>Clicked {children} times!</button>
