import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { HelloWorld } from './HelloWorld'

export default {
  title: 'HelloWorld user',
  decorators: [withKnobs],
}

export const UserAdminStory: React.FC<{}> = () => {
  const username = text('User name', 'admin')

  return <HelloWorld username={username} />
}
