import React from 'react'
import { render } from 'react-dom'
import { TodoListContainer } from './components/TodoList'

const todoList = [
  {
    id: 0,
    title: 'task 1',
    descriprion: 'learn frontend',
    isCompleted: false,
  },
]

render(<TodoListContainer list={todoList} />, document.getElementById('root'))
