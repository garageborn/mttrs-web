import configureStore from '../../../app/config/configureStore'
import configureApollo from '../../../app/config/configureApollo'
import matchRequest from './matchRequest'

let requestHandler = ({request, response, parameters}) => {
  const apolloClient = configureApollo({ ssrMode: true })
  const store = configureStore({}, apolloClient)
  return matchRequest({ store, apolloClient, request, response, parameters })
}

export default requestHandler
