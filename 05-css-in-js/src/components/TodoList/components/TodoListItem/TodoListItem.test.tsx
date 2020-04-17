import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { Title, ButtonToActive, ButtonToDone } from './styles'
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

  it('renders snapshot', () => {
    expect(
      renderer.create(<TodoListItem {...testItem} />).toJSON(),
    ).toMatchSnapshot()
  })

  it('Default render', () => {
    const wrapper = shallow(<TodoListItem {...testItem} />)
    expect(wrapper.find(Title).text()).toEqual(testItem.title)
    expect(wrapper.find(ButtonToDone)).toHaveLength(1)
    expect(wrapper.find(ButtonToActive)).toHaveLength(0)
  })

  it('Render item with isCompleted: true ', () => {
    testItem.isCompleted = true
    const wrapper = shallow(<TodoListItem {...testItem} />)
    expect(wrapper.find(ButtonToDone)).toHaveLength(0)
    expect(wrapper.find(ButtonToActive)).toHaveLength(1)
  })
})
