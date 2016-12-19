import React, {Component, PropTypes} from 'react'
import { ApolloProvider } from 'react-apollo'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import IntlProvider from '../config/IntlProvider'
require('../styles/app.css')

class App extends Component {
  render () {
    const { store, apolloClient, routes } = this.props
    const history = syncHistoryWithStore(browserHistory, store)

    return (
      <ApolloProvider store={store} client={apolloClient}>
        <IntlProvider>
          <Router history={history} routes={routes} />
        </IntlProvider>
      </ApolloProvider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  apolloClient: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
}

export default App
