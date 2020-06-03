import React, { FC } from 'react'
import { TodoListContainer } from '@components/TodoList'

const todoList = [
  {
    id: 0,
    title: 'task 1',
    descriprion: 'learn frontend',
    isCompleted: false,
  },
]

export const HomePage: FC<{}> = () => {
  return <TodoListContainer list={todoList} />
}
