import React from 'react'
import ReactDOM from 'react-dom'
import App from './app//containers/App'
import configureStore from './app//config/configureStore.production'

const store = configureStore(window.__INITIAL_STATE__)
ReactDOM.render(<App store={store}/>, document.getElementById('mttrs'))
