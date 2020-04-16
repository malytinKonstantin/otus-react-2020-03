import React from 'react'

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
  const { title, description, isCompleted, onDone, onActive, onRemove } = props

  return (
    <div>
      <div className="title">{title}</div>
      <div className="nav">
        {isCompleted ? (
          <button onClick={onActive}>взять в работу</button>
        ) : (
          <button onClick={onDone}>выполнено</button>
        )}
        <button onClick={onRemove}>удалить</button>
      </div>
    </div>
  )
}
