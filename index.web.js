import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/containers/App'
import configureStore from './app/config/configureStore'
import DevTools from './app/utils/DevTools'
import Setup from './app/config/Setup'

if (window) Setup.fromWindow(window)
const store = configureStore(window.__INITIAL_STATE__)

ReactDOM.render(<App store={store}/>, document.getElementById('mttrs'))
ReactDOM.render(<DevTools store={store}/>, document.getElementById('dev-tools'))
