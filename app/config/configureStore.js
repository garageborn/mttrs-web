import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {browserHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'
import ReactGA from 'react-ga'
import {gaMiddleware} from '../utils/AnalyticsMiddleware'
import * as reducers from '../reducers/index'

const routeMiddleware = routerMiddleware(browserHistory)

export default function configureStore (initialState, apolloClient) {
  const rootReducer = combineReducers({
    apollo: apolloClient.reducer(),
    ...reducers
  })

  let middlewares = [
    applyMiddleware(apolloClient.middleware()),
    applyMiddleware(thunkMiddleware),
    applyMiddleware(routeMiddleware)
  ]

  if (_production_ && typeof window !== 'undefined') {
    ReactGA.initialize('UA-135591744')
    middlewares.push(applyMiddleware(gaMiddleware))
  }

  if (_development_) {
    const DevTools = require('./DevTools')
    middlewares.push(DevTools.instrument())
  }

  const createStoreWithMiddleware = compose(...middlewares)(createStore)

  return createStoreWithMiddleware(rootReducer, initialState)
}
