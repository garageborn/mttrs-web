import ApolloClient from 'apollo-client'
import * as ENDPOINTS from '../constants/APIEndpoints'
import createNetworkInterface from '../utils/ApolloNetworkInterface'

const tenantMiddleware = (options) => {
  return {
    applyMiddleware: (req, next) => {
      if (!req.options.headers) req.options.headers = {}
      req.options.headers['X-Tenant'] = 'mttrs_br'
      next()
    }
  }
}

const skipCacheMiddleware = (options) => {
  return {
    applyMiddleware: (req, next) => {
      let hasMutation = req.request.query.definitions.find((definition) => {
        return definition.operation === 'mutation'
      })

      if (hasMutation) {
        req.options.method = 'POST'
      } else {
        req.options.method = 'GET'
      }

      next()
    }
  }
}

export default function configureApollo (options = {}) {
  const networkInterface = createNetworkInterface(
    Object.assign({}, { uri: ENDPOINTS.GRAPHQL }, options)
  )

  networkInterface.use([
    tenantMiddleware(options),
    skipCacheMiddleware(options)
  ])

  return new ApolloClient({ networkInterface: networkInterface })
}
