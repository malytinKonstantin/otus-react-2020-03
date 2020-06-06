import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { AppContainer } from './app'
import { store } from '@/store'

const wrapper = (
  <ReduxProvider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </ReduxProvider>
)

render(wrapper, document.getElementById('root'))
