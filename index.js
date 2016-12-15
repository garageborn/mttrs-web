import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/containers/App'
import DevTools from './app/utils/DevTools'
import configureStore from './app/config/configureStore'
import configureApollo from './app/config/configureApollo'
import { buildRoutes } from './app/config/Routes'

const apolloClient = configureApollo()
const store = configureStore(window.__INITIAL_STATE__, apolloClient)
const render = ({ store, apolloClient, routes }) => {
  ReactDOM.render(
    <App store={store} apolloClient={apolloClient} routes={routes} />,
    document.getElementById('mttrs')
  )
  ReactDOM.render(<DevTools store={store} />, document.getElementById('dev-tools'))
}

buildRoutes(apolloClient)
  .then(routes => render({ store, apolloClient, routes }))
  .catch(error => console.error(error))
