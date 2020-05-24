import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './app'

const wrapper = (
  <Router>
    <App />
  </Router>
)

render(wrapper, document.getElementById('root'))
