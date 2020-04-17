import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

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

  it('renders snapshot', () => {
    expect(
      renderer.create(<TodoListCreateItem onCreate={jest.fn} />).toJSON(),
    ).toMatchSnapshot()
  })

  it('Default render', () => {
    expect(wrapper.find('input')).toHaveLength(1)
    expect(wrapper.find('.btn-reset')).toHaveLength(1)
    expect(wrapper.find('.btn-add')).toHaveLength(1)
  })

  it('input change event', () => {
    wrapper.find('input').simulate('change', { target: { value: title } })
    expect(wrapper.find('input').prop('value')).toBe(title)
  })

  it('reset button click', () => {
    wrapper.find('.btn-reset').simulate('click')
    expect(wrapper.find('input').prop('value')).toBe('')
  })

  it('add button click', () => {
    wrapper.find('input').simulate('change', { target: { value: title } })
    wrapper.find('.btn-add').simulate('click')
    expect(nextItem).not.toEqual(null)
    expect(nextItem.title).toBe(title)
    expect(nextItem.isCompleted).toBe(false)
  })
})
