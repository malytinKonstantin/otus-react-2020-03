import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { act } from 'react-dom/test-utils'

import { TodoListContainer } from './TodoListContainer'

describe('<TodoListContainer />', () => {
  const todoList = [
    {
      id: 0,
      title: 'task 1',
      descriprion: 'learn frontend',
      isCompleted: false,
    },
  ]

  const wrapper = mount(<TodoListContainer list={todoList} />)

  it('renders snapshot', () => {
    expect(
      renderer.create(<TodoListContainer list={todoList} />).toJSON(),
    ).toMatchSnapshot()
  })
})
