import React, {Component, PropTypes} from 'react'
import { ApolloProvider } from 'react-apollo'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

class App extends Component {
  render() {
    const { store, apolloClient, routes } = this.props
    const history = syncHistoryWithStore(browserHistory, store)

    return (
      <ApolloProvider store={store} client={apolloClient}>
        <Router history={history} routes={routes}/>
      </ApolloProvider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  apolloClient: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
}

export default App
