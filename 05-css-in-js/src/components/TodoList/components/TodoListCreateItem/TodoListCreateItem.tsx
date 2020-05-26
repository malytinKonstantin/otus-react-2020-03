import React from 'react'
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
  const initialValues = {
    title: '',
  }

  const handleSubmit = (values: typeof initialValues, form: any) => {
    const item = {
      id: String(Math.random()),
      title: values.title,
      isCompleted: false,
    }
    props.onCreate(item)
    form.resetForm()
  }

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      {(formProps) => (
        <Form>
          <Wrapper>
            <Field
              type="text"
              name="title"
              id="title"
              component={TextField}
              value={formProps.values.title}
              onChange={formProps.handleChange}
            />
            <ButtonSubmit type="submit">добавить</ButtonSubmit>
            <ButtonReset type="button" onClick={() => formProps.resetForm}>
              сброс
            </ButtonReset>
          </Wrapper>
        </Form>
      )}
    </Formik>
  )
}
