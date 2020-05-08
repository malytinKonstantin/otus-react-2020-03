import React from 'react'
import { Title, Checkbox, Button, ButtonRemove, Wrapper, Nav } from './styles'

export interface TodoListItem {
  id: string
  title: string
  isCompleted: boolean
}

interface TodoListItemProps extends TodoListItem {
  onDone: () => void
  onActive: () => void
  onRemove: () => void
}

export const TodoListItem: React.FC<Props> = (props) => {
  const { title, isCompleted, onDone, onActive, onRemove } = props

  return (
    <Wrapper>
      <Title onClick={isCompleted ? onActive : onDone}>
        <Checkbox isCompleted={isCompleted} />
        {title}
      </Title>
      <ButtonRemove onClick={onRemove}>удалить</ButtonRemove>
    </Wrapper>
  )
}
