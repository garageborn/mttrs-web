import { combineReducers } from 'redux'
import * as reducers from '../reducers/index'

export default function configureReducers(apolloClient) {
  return combineReducers({
    apollo: apolloClient.reducer(),
    ...reducers
  })
}
