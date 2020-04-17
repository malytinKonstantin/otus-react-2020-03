import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, array } from '@storybook/addon-knobs'
import { TodoListCreateItem } from './TodoListCreateItem'

export default {
  title: 'Todo list create item',
  decorators: [withKnobs],
}

export const TodoListCreateItemExample: React.FC<{}> = () => {
  return <TodoListCreateItem onCreate={action('create item')} />
}
