import configureStore from '../../../app/config/configureStore'
import configureApollo from '../../../app/config/configureApollo'

let requestHandler = ({request, response, parameters}) => {
  const apolloClient = configureApollo({ ssrMode: true })
  const store = configureStore({}, apolloClient)
  return require('./matchRequest')({ store, apolloClient, request, response, parameters })
}

export default requestHandler
