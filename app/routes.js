import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './pages/layout'
import Home from './pages/home'

export default function () {
  const routes = (
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
    </Route>
  )

  return routes
}
