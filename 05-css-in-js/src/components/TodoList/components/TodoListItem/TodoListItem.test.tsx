import React from 'react'
import { shallow } from 'enzyme'
import { TodoListItem } from './TodoListItem'

describe('<TodoListItem />', () => {
  const testItem = {
    id: 123,
    title: 'test-title',
    isCompleted: false,
    onDone: jest.fn,
    onActive: jest.fn,
    onRemove: jest.fn,
  }

  it('Default render', () => {
    const wrapper = shallow(<TodoListItem {...testItem} />)
    expect(wrapper.find('.title').text()).toEqual(testItem.title)
    expect(wrapper.find('.btn-to-done')).toHaveLength(1)
    expect(wrapper.find('.btn-to-active')).toHaveLength(0)
  })

  it('Render item with isCompleted: true ', () => {
    testItem.isCompleted = true
    const wrapper = shallow(<TodoListItem {...testItem} />)
    expect(wrapper.find('.btn-to-done')).toHaveLength(0)
    expect(wrapper.find('.btn-to-active')).toHaveLength(1)
  })
})
