import React from 'react'
import { render } from 'react-dom'
import { TodoList } from './components/TodoList'

const todoList = [
  {
    id: 0,
    title: 'task 1',
    descriprion: 'learn frontend',
    isCompleted: false,
  },
]

render(<TodoList list={todoList} />, document.getElementById('root'))
