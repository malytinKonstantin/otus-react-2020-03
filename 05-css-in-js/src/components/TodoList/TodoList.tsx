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

export const TodoList: React.FC<TodoListProps, TodoListState> = (props) => {
  const [list, setList] = useState(props.list)

  const add = (listItem: TodoListItem) => setList([...list, listItem])

  const remove = (id: string) =>
    setList([...list.filter((item) => item.id !== id)])

  const complete = (isCompleted: boolean) => (id: string) => {
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
            onActive={() => complete(false)(id)}
            onDone={() => complete(true)(id)}
            onRemove={() => remove(id)}
          />
        )
      })}
    </div>
  )
}
