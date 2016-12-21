import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import configureStore from './config/configureStore'
import configureApollo from './config/configureApollo'
import buildRoutes from './config/Routes'
const apolloClient = configureApollo()
const store = configureStore(window.__INITIAL_STATE__, apolloClient)

const render = ({ store, apolloClient, routes }) => {
  ReactDOM.render(
    <App store={store} apolloClient={apolloClient} routes={routes} />,
    document.getElementById('react')
  )
  if (_development_) {
    const DevTools = require('./utils/DevTools')
    ReactDOM.render(<DevTools store={store} />, document.getElementById('dev-tools'))
  }
}

buildRoutes(apolloClient)
  .then(routes => render({ store, apolloClient, routes }))
  .catch(error => console.error(error))
