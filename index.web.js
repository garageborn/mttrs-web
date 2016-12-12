import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/containers/App'
import DevTools from './app/utils/DevTools'
import Setup from './app/config/Setup'
import configureStore from './app/config/configureStore'
import configureApollo from './app/config/configureApollo'

if (window) Setup.fromWindow(window)
const apolloClient = configureApollo()
const store = configureStore(window.__INITIAL_STATE__, apolloClient)

ReactDOM.render(
  <App store={store} apolloClient={apolloClient}/>,
  document.getElementById('mttrs')
)
ReactDOM.render(<DevTools store={store}/>, document.getElementById('dev-tools'))
