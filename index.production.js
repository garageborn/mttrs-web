import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/containers/App'
import configureStore from './app/config/configureStore.production'
import configureApollo from './app/config/configureApollo'
import { buildRoutes } from './app/config/Routes'

const apolloClient = configureApollo()
const store = configureStore(window.__INITIAL_STATE__, apolloClient)
const render = ({ store, apolloClient, routes }) => {
  ReactDOM.render(
    <App store={store} apolloClient={apolloClient} routes={routes} />,
    document.getElementById('mttrs')
  )
}

buildRoutes(apolloClient).then(routes => render({ store, apolloClient, routes }))
