import React, {Component, Children, PropTypes} from 'react'
import {ApolloProvider} from 'react-apollo'
import {Router, RouterContext, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import IntlProvider from '../config/IntlProvider'

class SettingsProvider extends Component {
  getChildContext () {
    const {settings} = this.props
    console.log('================settingsProvider', this.props.settings.language)
    return {
      settings: {language: settings.language, tenant: settings.tenant, timezone: settings.timezone}
    }
  }

  render () {
    return Children.only(this.props.children)
  }
}

SettingsProvider.childContextTypes = {
  settings: PropTypes.shape({
    language: PropTypes.string,
    tenant: PropTypes.string,
    timezone: PropTypes.string
  })
}

SettingsProvider.propTypes = {
  settings: PropTypes.shape({
    language: PropTypes.string.isRequired,
    tenant: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired
  }).isRequired
}

class Wrapper {
  constructor ({settings, request, window}) {
    this.settings = settings
    this.request = request
    this.window = window
  }

  run ({renderProps, routes}) {
    if (this.request) return this.fromServer(renderProps)
    return this.fromClient(routes)
  }

  fromServer (renderProps) {
    return (
      <SettingsProvider settings={this.settings}>
        <ApolloProvider store={this.settings.store} client={this.settings.apolloClient}>
          <IntlProvider>
            <RouterContext {...renderProps} />
          </IntlProvider>
        </ApolloProvider>
      </SettingsProvider>
    )
  }

  fromClient (routes) {
    const history = syncHistoryWithStore(browserHistory, this.settings.store)

    return (
      <SettingsProvider settings={this.settings}>
        <ApolloProvider store={this.settings.store} client={this.settings.apolloClient}>
          <IntlProvider>
            <Router history={history} routes={routes} />
          </IntlProvider>
        </ApolloProvider>
      </SettingsProvider>
    )
  }
}

export default Wrapper
