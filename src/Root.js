import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from './history';
import App from './App'

const Root = () => (
  <Router history={history}>
    <Route component={App} />
  </Router>
)

export default Root
