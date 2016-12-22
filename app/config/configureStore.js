import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {browserHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'
import {createTracker} from 'redux-segment'
import * as reducers from '../reducers/index'

const routeMiddleware = routerMiddleware(browserHistory)
const trackMiddleware = createTracker()

export default function configureStore (initialState, apolloClient) {
  const rootReducer = combineReducers({
    apollo: apolloClient.reducer(),
    ...reducers
  })

  let middlewares = [
    applyMiddleware(apolloClient.middleware()),
    applyMiddleware(thunkMiddleware),
    applyMiddleware(trackMiddleware),
    applyMiddleware(routeMiddleware)
  ]

  if (_development_) {
    const DevTools = require('./DevTools')
    middlewares.push(DevTools.instrument())
  }

  const createStoreWithMiddleware = compose(...middlewares)(createStore)

  return createStoreWithMiddleware(rootReducer, initialState)
}
