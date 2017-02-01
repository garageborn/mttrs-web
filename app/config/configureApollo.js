import ApolloClient, { createNetworkInterface } from 'apollo-client'
import * as ENDPOINTS from '../constants/APIEndpoints'

const tenantMiddleware = (options) => {
  return {
    applyMiddleware: (req, next) => {
      if (!req.options.headers) req.options.headers = {}
      req.options.headers['X-Tenant'] = options.tenant
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

      if (!req.options.headers) req.options.headers = {}
      req.options.headers['X-Skip-Cache'] = hasMutation

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
