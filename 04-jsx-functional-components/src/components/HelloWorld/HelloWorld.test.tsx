import React from 'react'
import { shallow } from 'enzyme'
import { HelloWorld } from './HelloWorld'

describe('<HelloWorld />', () => {
  it('Default render with prop', () => {
    const wrapper = shallow(<HelloWorld username="admin" />)

    expect(wrapper.text()).toEqual('Hello world, admin')
  })
})
