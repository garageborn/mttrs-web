import ApolloClient, { createNetworkInterface } from 'apollo-client'
import * as ENDPOINTS from '../constants/APIEndpoints'

export default function configureApollo (options = {}) {
  const networkInterface = createNetworkInterface(
    Object.assign({}, { uri: ENDPOINTS.GRAPHQL }, options)
  )

  networkInterface.use([{
    applyMiddleware (req, next) {
      if (!req.options.headers) {
        req.options.headers = { 'X-Tenant': options.tenant }
      }
      next()
    }
  }])

  return new ApolloClient({ networkInterface: networkInterface })
}
