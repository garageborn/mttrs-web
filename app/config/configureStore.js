import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {browserHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'
import DevTools from '../utils/DevTools'
import configureReducers from './configureReducers'

const routeMiddleware = routerMiddleware(browserHistory)

export default function configureStore(initialState, apolloClient) {
  const rootReducer = configureReducers(apolloClient)

  let createStoreWithMiddleware
  if (typeof __DEV__ !== 'undefined' && __DEV__) {
    createStoreWithMiddleware = compose(
      applyMiddleware(thunkMiddleware),
      applyMiddleware(routeMiddleware),
      applyMiddleware(apolloClient.middleware()),
      DevTools.instrument()
    )(createStore)
  } else {
    createStoreWithMiddleware = compose(
      applyMiddleware(thunkMiddleware),
      applyMiddleware(routeMiddleware),
      applyMiddleware(apolloClient.middleware())
    )(createStore)
  }

  return createStoreWithMiddleware(rootReducer, initialState)
}
