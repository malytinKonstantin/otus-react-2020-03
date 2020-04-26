import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

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

  it('Default render', () => {
    expect(wrapper.find('TodoListCreateItem')).toHaveLength(1)
    expect(wrapper.find('TodoListItem')).toHaveLength(1)
  })

  it('Add task item', () => {
    wrapper
      .find('TodoListCreateItem')
      .find('input')
      .simulate('change', { target: { value: 'test item' } })
    wrapper.find('TodoListCreateItem').find('.btn-add').at(0).simulate('click')
    expect(wrapper.find('TodoListItem')).toHaveLength(2)
  })

  it('Remove task item', () => {
    wrapper
      .find('TodoListItem')
      .at(1)
      .find('.btn-remove')
      .at(0)
      .simulate('click')
    expect(wrapper.find('TodoListItem')).toHaveLength(1)
  })
})
