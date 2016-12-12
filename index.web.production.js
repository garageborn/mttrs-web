import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/containers/App'
import configureStore from './app/config/configureStore.production'
import configureApollo from './app/config/configureApollo'

const apolloClient = configureApollo()
const store = configureStore(window.__INITIAL_STATE__, apolloClient)

ReactDOM.render(
  <App store={store} apolloClient={apolloClient} />,
  document.getElementById('mttrs')
)
