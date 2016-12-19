import ApolloClient, { createNetworkInterface } from 'apollo-client'
import * as ENDPOINTS from '../constants/APIEndpoints'
// import Tenant from '../common/utils/Tenant'

export default function configureApollo (options = {}) {
  const networkInterface = createNetworkInterface(
    Object.assign({}, { uri: ENDPOINTS.GRAPHQL }, options)
  )
  //
  // networkInterface.use([{
  //   applyMiddleware(req, next) {
  //     if (!req.options.headers) {
  //       req.options.headers = {
  //         'X-Tenant': Tenant.current
  //       }
  //     }
  //     next()
  //   }
  // }])

  return new ApolloClient({ networkInterface: networkInterface })
}
