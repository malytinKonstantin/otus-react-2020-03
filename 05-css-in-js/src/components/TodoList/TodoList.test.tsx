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
    expect(wrapper.find(TodoListCreateItem)).toHaveLength(1)
    expect(wrapper.find(TodoListItem)).toHaveLength(1)
  })

  it('Add task item', () => {
    wrapper.find('input').simulate('change', { target: { value: 'test item' } })
    wrapper.find('.btn-add').simulate('click')
    expect(wrapper.find(TodoListItem)).toHaveLength(2)
  })

  it('Remove task item', () => {
    wrapper.find(TodoListItem).at(0).find('.btn-remove').simulate('click')
    expect(wrapper.find(TodoListItem)).toHaveLength(1)
  })

  it('Complete task item', () => {
    expect(wrapper.find(TodoListItem).find(ButtonToActive)).toHaveLength(0)
    expect(wrapper.find(TodoListItem).find(ButtonToDone)).toHaveLength(1)
    wrapper.find(TodoListItem).find(ButtonToDone).simulate('click')
    expect(wrapper.find(TodoListItem).find(ButtonToActive)).toHaveLength(1)
    expect(wrapper.find(TodoListItem).find(ButtonToDone)).toHaveLength(0)
  })

  it('To active task item', () => {
    expect(wrapper.find(TodoListItem).find(ButtonToActive)).toHaveLength(1)
    expect(wrapper.find(TodoListItem).find(ButtonToDone)).toHaveLength(0)
    wrapper.find(TodoListItem).find(ButtonToActive).simulate('click')
    expect(wrapper.find(TodoListItem).find(ButtonToActive)).toHaveLength(0)
    expect(wrapper.find(TodoListItem).find(ButtonToDone)).toHaveLength(1)
  })
})
