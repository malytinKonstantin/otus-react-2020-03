import React, { useState } from 'react'
import {
  TodoListItem as TodoListItemComponent,
  TodoListCreateItem,
} from './components'
import type { TodoListItem } from './components'

interface TodoListProps {
  list: TodoListItem[]
}

interface TodoListState {
  list: odoListItem[]
}

export const TodoList: React.FC<TodoListProps> = (props) => {
  const [list, setList] = useState<TodoListState>(props.list)

  const add = (listItem: TodoListItem) => setList([...list, listItem])

  const remove = (id: string) =>
    setList([...list.filter((item) => item.id !== id)])

  const changeComplete = (isCompleted: boolean) => (id: string) => {
    const current = list.find((item) => item.id === id)
    current.isCompleted = isCompleted
    setList([...list])
  }

  return (
    <div>
      <TodoListCreateItem onCreate={add} />
      {list.map((listItem: TodoListItem) => {
        const { id } = listItem
        return (
          <TodoListItemComponent
            key={id}
            {...listItem}
            onActive={() => changeComplete(false)(id)}
            onDone={() => changeComplete(true)(id)}
            onRemove={() => remove(id)}
          />
        )
      })}
    </div>
  )
}
