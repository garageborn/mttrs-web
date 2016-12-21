import configureStore from '../../../app/config/configureStore'
import configureApollo from '../../../app/config/configureApollo'
import Setup from '../../../app/config/Setup'
// import matchRequest from './matchRequest'

let requestHandler = ({request, response, parameters}) => {
  request.headers["X-TIMEZONE"] = "America/Los_Angeles"

  Setup.fromRequest(request)
  const apolloClient = configureApollo({ ssrMode: true })
  const store = configureStore({}, apolloClient)
  // return matchRequest({ store, apolloClient, request, response, parameters })
  return require('./matchRequest')({ store, apolloClient, request, response, parameters })
}

export default requestHandler
