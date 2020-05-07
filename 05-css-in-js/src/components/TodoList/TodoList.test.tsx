import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { act } from 'react-dom/test-utils'

import { TodoList } from './TodoList'

import {
  TodoListItem,
  TodoListCreateItem,
  ButtonToDone,
  ButtonToActive,
} from './components'
import { TextField } from './components/TodoListCreateItem/styles'
import { ButtonRemove } from './components/TodoListItem/styles'

describe('<TodoList />', () => {
  const todoList = [
    {
      id: 0,
      title: 'task 1',
      descriprion: 'learn frontend',
      isCompleted: false,
    },
  ]

  const wrapper = mount(<TodoList list={todoList} />)

  it('renders snapshot', () => {
    expect(
      renderer.create(<TodoList list={todoList} />).toJSON(),
    ).toMatchSnapshot()
  })
})
