import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { act } from 'react-dom/test-utils'

import { TodoListCreateItem } from './TodoListCreateItem'

describe('<TodoListCreateItem />', () => {
  let nextItem = null
  const title = 'title test item'

  const wrapper = mount(
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
    expect(wrapper.find('TextField')).toHaveLength(1)
    expect(wrapper.find('ButtonReset')).toHaveLength(1)
    expect(wrapper.find('ButtonSubmit')).toHaveLength(1)
  })

  it('add button click', async () => {
    await act(async () => {
      wrapper
        .find('[name="title"]')
        .simulate('change', { target: { value: title, name: 'title' } })
      wrapper.find('form').simulate('submit')
    })
    expect(nextItem).not.toEqual(null)
    expect(nextItem.title).toBe(title)
    expect(nextItem.isCompleted).toBe(false)
  })
})
