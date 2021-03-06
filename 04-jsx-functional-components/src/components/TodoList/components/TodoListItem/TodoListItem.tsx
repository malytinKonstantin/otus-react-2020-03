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
  const { title, isCompleted, onDone, onActive, onRemove } = props

  return (
    <div>
      <div className="title">{title}</div>
      <div className="nav">
        {isCompleted ? (
          <button className="btn-to-active" onClick={onActive}>
            взять в работу
          </button>
        ) : (
          <button className="btn-to-done" onClick={onDone}>
            выполнено
          </button>
        )}
        <button className="btn-remove" onClick={onRemove}>
          удалить
        </button>
      </div>
    </div>
  )
}
