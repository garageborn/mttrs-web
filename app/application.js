import React from 'react'
import ReactDOM from 'react-dom'
import Config from './config'
const config = new Config({window})

const render = (routes) => {
  ReactDOM.render(
    config.wrapper.run({routes}),
    document.getElementById('react')
  )
  if (_development_) {
    const DevTools = require('./utils/DevTools')
    ReactDOM.render(<DevTools store={config.settings.store} />, document.getElementById('dev-tools'))
  }
}

config.buildRoutes
  .then(routes => render(routes))
  .catch(error => console.error(error))
