import React from 'react'
import configureStore from '../../config/configureStore.production'
import configureApollo from '../../config/configureApollo'
import matchRequest from './matchRequest'

let requestHandler = (request, response) => {
  const apolloClient = configureApollo({
    ssrMode: true,
    // opts: { headers: request.headers }
  })
  const store = configureStore({}, apolloClient)
  return matchRequest({ store, apolloClient, request, response })
}

export default requestHandler
