import React from 'react'
import { Title, ButtonToActive, ButtonToDone } from './styles'

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
    <div>
      <Title>{title}</Title>
      <div className="nav">
        {isCompleted ? (
          <ButtonToActive onClick={onActive}>взять в работу</ButtonToActive>
        ) : (
          <ButtonToDone onClick={onDone}>выполнено</ButtonToDone>
        )}
        <button className="btn-remove" onClick={onRemove}>
          удалить
        </button>
      </div>
    </div>
  )
}
