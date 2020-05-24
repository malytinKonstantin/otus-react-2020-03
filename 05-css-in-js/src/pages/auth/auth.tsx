import React, { FC, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import { Row, Wrapper, Label, Input } from './styles'

interface AuthPageProps {
  onLogin: Function
}

export const AuthPage: FC<AuthPageProps> = ({ onLogin }) => {
  const handleSubmit = (values, form) => {
    onLogin(values)
    form.resetForm()
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        login: '',
        password: '',
      }}
    >
      {(formProps) => (
        <Form>
          <Wrapper>
            <Row>
              <Label htmlFor="login">name</Label>
              <Field
                type="text"
                name="login"
                id="login"
                component={Input}
                value={formProps.values.login}
                onChange={formProps.handleChange}
              />
            </Row>
            <Row>
              <Label htmlFor="password">password</Label>
              <Field
                type="password"
                name="password"
                id="password"
                component={Input}
                value={formProps.values.password}
                onChange={formProps.handleChange}
              />
            </Row>
            <button type="submit">login</button>
          </Wrapper>
        </Form>
      )}
    </Formik>
  )
}
