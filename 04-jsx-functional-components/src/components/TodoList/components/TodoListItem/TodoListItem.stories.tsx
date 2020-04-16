import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, number, text, boolean } from '@storybook/addon-knobs'
import { TodoListItem } from './TodoListItem'

export default {
  title: 'Todo list item',
  decorators: [withKnobs],
}

export const TodoListItemExample: React.FC<{}> = () => {
  const props = {
    id: number('id', 0),
    title: text('title', 'test text'),
    isCompleted: boolean('boolean', false),
    onDone: action('done task'),
    onActive: action('to active task'),
    onRemove: action('remove task'),
  }

  return <TodoListItem {...props} />
}
