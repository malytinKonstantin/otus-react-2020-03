import React, { useState } from 'react'
import { TodoListItem as TodoListItemComponent } from './components/TodoListItem'
import type { TodoListItem } from './components/TodoListItem'
import { TodoListCreateItem } from './components/TodoListCreateItem'

interface TodoListProps {
  list: TodoListItem[]
}

export const TodoList: React.FC<TodoListProps> = (props) => {
  const [list, setList] = useState<TodoListItem[]>(props.list)

  const addItem = (listItem: TodoListItem) => setList([...list, listItem])

  const removeItem = (listItem: TodoListItem) =>
    setList([...list.filter((item) => item !== listItem)])

  const changeComplete = (isCompleted: boolean, listItem: TodoListItem) => {
    const index = list.indexOf(listItem)
    list[index] = Object.assign({}, listItem, { isCompleted })
    setList([...list])
  }

  return (
    <div>
      <TodoListCreateItem onCreate={addItem} />
      {list.map((listItem: TodoListItem) => (
        <TodoListItemComponent
          key={listItem.id}
          {...listItem}
          onActive={() => changeComplete(false, listItem)}
          onDone={() => changeComplete(true, listItem)}
          onRemove={() => removeItem(listItem)}
        />
      ))}
    </div>
  )
}
