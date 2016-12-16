import * as reducers from '../reducers/index'

export default function configureReducers (apolloClient) {
  return {
    apollo: apolloClient.reducer(),
    ...reducers
  }
}
