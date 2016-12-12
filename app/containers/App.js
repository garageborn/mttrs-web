import React, {Component, PropTypes} from 'react'
import { ApolloProvider } from 'react-apollo'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import Routes from '../config/Routes'
import configureApollo from '../config/configureApollo'

class App extends Component {
  render() {
    const {store} = this.props
    const history = syncHistoryWithStore(browserHistory, store)
    const apolloClient = configureApollo()

    return (
      <ApolloProvider store={store} client={apolloClient}>
        <Router history={history} routes={Routes.all(store)}/>
      </ApolloProvider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App
