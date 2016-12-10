import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import apolloClient from './apolloClient'
import thunkMiddleware from 'redux-thunk'
import {browserHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'
import DevTools from '../utils/DevTools'
import * as reducers from '../reducers/index'

const routeMiddleware = routerMiddleware(browserHistory)

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
const rootReducer = combineReducers(reducers)

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}
