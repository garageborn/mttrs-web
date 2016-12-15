import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {browserHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'
import configureReducers from './configureReducers'

const routeMiddleware = routerMiddleware(browserHistory)

export default function configureStore(initialState, apolloClient) {
  const rootReducer = configureReducers(apolloClient)

  const createStoreWithMiddleware = compose(
    applyMiddleware(apolloClient.middleware()),
    applyMiddleware(thunkMiddleware),
    applyMiddleware(routeMiddleware)
  )(createStore)

  return createStoreWithMiddleware(rootReducer, initialState)
}
