import React, { useState } from 'react'
import { TodoList } from './TodoList'
import type { TodoListItem } from './components'

export const TodoListContainer: React.FC<{ list: TodoListItem[] }> = (
  props,
) => {
  const [list, setList] = useState<TodoListItem[]>(props.list)

  const addItem = (listItem: TodoListItem) => setList([...list, listItem])

  const removeItem = (id: string) =>
    setList([...list.filter((item) => item.id !== id)])

  const changeComplete = (isCompleted: boolean) => (id: string) => {
    const current = list.find((item) => item.id === id)
    if (current) {
      current.isCompleted = isCompleted
      setList([...list])
    }
  }

  return (
    <TodoList
      list={list}
      onCreate={addItem}
      onActive={changeComplete(false)}
      onDone={changeComplete(true)}
      onRemove={removeItem}
    />
  )
}
