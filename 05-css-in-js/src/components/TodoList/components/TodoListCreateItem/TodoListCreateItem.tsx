import React, { useState, useCallback } from 'react'
import { Wrapper, TextField, Button } from './styles'

import type { TodoListItem } from '../TodoListItem'

interface TodoListCreateItemProps {
  /*
   * callback from parent for submit created item
   */
  onCreate: (listItem: TodoListItem) => void
}

export const TodoListCreateItem: React.FC<TodoListCreateItemProps> = (
  props,
) => {
  const [title, setTitle] = useState<string>('')

  const { onCreate } = props

  const handleChangeTitle = (e) => setTitle(e.target.value)

  const reset = useCallback(() => setTitle(''), [])

  const create = () => {
    const item = {
      id: Math.random(),
      title,
      isCompleted: false,
    }
    onCreate(item)
    reset()
  }

  return (
    <Wrapper>
      <TextField type="text" value={title} onChange={handleChangeTitle} />
      <Button className="btn-add" onClick={create}>
        добавить
      </Button>
      <Button className="btn-reset" onClick={reset}>
        сброс
      </Button>
    </Wrapper>
  )
}
