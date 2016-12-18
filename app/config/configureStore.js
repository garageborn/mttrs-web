import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {browserHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'
import configureReducers from './configureReducers'
import DevTools from '../utils/DevTools'

const routeMiddleware = routerMiddleware(browserHistory)

export default function configureStore (initialState, apolloClient) {
  const rootReducer = configureReducers(apolloClient)

  let middlewares = [
    applyMiddleware(apolloClient.middleware()),
    applyMiddleware(thunkMiddleware),
    applyMiddleware(routeMiddleware)
  ]

  if (_development_) middlewares.push(DevTools.instrument())

  const createStoreWithMiddleware = compose(...middlewares)(createStore)

  return createStoreWithMiddleware(rootReducer, initialState)
}
