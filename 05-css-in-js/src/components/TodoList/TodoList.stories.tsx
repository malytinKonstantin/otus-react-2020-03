import React from 'react'
import { withKnobs, array } from '@storybook/addon-knobs'
import { TodoListContainer } from './TodoListContainer'

export default {
  title: 'Todo list',
  decorators: [withKnobs],
}

export const TodoListExample: React.FC<{}> = () => {
  const todoList = [
    { id: 0, title: 'item 1', isCompleted: false },
    { id: 1, title: 'item 2', isCompleted: false },
    { id: 3, title: 'item 3', isCompleted: false },
  ]
  return <TodoListContainer list={todoList} />
}
