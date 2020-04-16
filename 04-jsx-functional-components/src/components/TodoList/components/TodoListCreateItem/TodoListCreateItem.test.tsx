import React from 'react'
import { shallow, mount } from 'enzyme'
import { TodoListCreateItem } from './TodoListCreateItem'

describe('<TodoListCreateItem />', () => {
  let nextItem = null
  const title = 'title test item'
  const wrapper = shallow(
    <TodoListCreateItem
      onCreate={jest.fn((item) => {
        nextItem = item
      })}
    />,
  )

  it('Default render', () => {
    expect(wrapper.find('input').length).toBe(1)
    expect(wrapper.find('.btn-reset').length).toBe(1)
    expect(wrapper.find('.btn-add').length).toBe(1)
  })

  it('input change event', () => {
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { value: title } })
    expect(wrapper.find('input').at(0).prop('value')).toBe(title)
  })

  it('reset button click', () => {
    wrapper.find('.btn-reset').at(0).simulate('click')
    expect(wrapper.find('input').at(0).prop('value')).toBe('')
  })

  it('add button click', () => {
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { value: title } })
    wrapper.find('.btn-add').at(0).simulate('click')
    expect(nextItem).not.toEqual(null)
    expect(nextItem.title).toBe(title)
    expect(nextItem.isCompleted).toBe(false)
  })
})
