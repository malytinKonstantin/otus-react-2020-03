import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { AuthPage } from './auth'

describe('<AuthPage />', () => {
  it('renders snapshot', () => {
    expect(
      renderer.create(<AuthPage onLogin={jest.fn} />).toJSON(),
    ).toMatchSnapshot()
  })
})
