import React, { useState, useCallback } from 'react'
import { Formik, Form, Field } from 'formik'
import { Wrapper, TextField, ButtonReset, ButtonSubmit } from './styles'

import type { TodoListItem } from '../TodoListItem'

export interface TodoListCreateItemProps {
  /*
   * callback from parent for submit created item
   */
  onCreate: (listItem: TodoListItem) => void
}

export const TodoListCreateItem: React.FC<TodoListCreateItemProps> = (
  props,
) => {
  const handleSubmit = (values, form) => {
    const item = {
      id: Math.random(),
      title: values.title,
      isCompleted: false,
    }
    props.onCreate(item)
    form.resetForm()
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        title: '',
      }}
    >
      {(props) => (
        <Form>
          <Wrapper>
            <Field
              type="text"
              name="title"
              id="title"
              component={TextField}
              value={props.values.title}
              onChange={props.handleChange}
            />
            <ButtonSubmit type="submit">добавить</ButtonSubmit>
            <ButtonReset type="button" onClick={props.resetForm}>
              сброс
            </ButtonReset>
          </Wrapper>
        </Form>
      )}
    </Formik>
  )
}
