import React from 'react'
import {
  TodoListItem as TodoListItemComponent,
  TodoListCreateItem,
} from './components'
import type { TodoListItem, TodoListCreateItemProps } from './components'

interface TodoListProps extends TodoListCreateItemProps {
  list: TodoListItem[]
  onActive(id: string): void
  onDone(id: string): void
  onRemove(id: string): void
}

export const TodoList: React.FC<TodoListProps> = ({
  list,
  onCreate,
  onActive,
  onDone,
  onRemove,
}) => {
  return (
    <>
      <TodoListCreateItem onCreate={onCreate} />
      {list.map((listItem: TodoListItem) => {
        const { id } = listItem
        return (
          <TodoListItemComponent
            key={id}
            {...listItem}
            onActive={() => onActive(id)}
            onDone={() => onDone(id)}
            onRemove={() => onRemove(id)}
          />
        )
      })}
    </>
  )
}
