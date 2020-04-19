import React, { useState, useCallback } from 'react'
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
    <div>
      <input type="text" value={title} onChange={handleChangeTitle} />
      <button className="btn-reset" onClick={reset}>
        сброс
      </button>
      <button className="btn-add" onClick={create}>
        добавить
      </button>
    </div>
  )
}
