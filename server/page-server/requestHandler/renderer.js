import React from 'react'
import ReactDOMServer from 'react-dom/server'
import 'isomorphic-fetch'
import {ApolloProvider} from 'react-apollo'
import {renderToStringWithData} from 'react-apollo/server'
import {RouterContext} from 'react-router'
import htmlOptions from './htmlOptions'
import Html from '../Html'
import IntlProvider from '../../../app/config/IntlProvider'

class RenderEngine {
  constructor ({ store, apolloClient, parameters }) {
    this.store = store
    this.apolloClient = apolloClient
    this.parameters = parameters
  }

  run (renderProps) {
    const component = (
      <ApolloProvider store={this.store} client={this.apolloClient}>
        <IntlProvider>
          <RouterContext {...renderProps} />
        </IntlProvider>
      </ApolloProvider>
    )

    return renderToStringWithData(component).then((content) => {
      return this.renderFullPage(content)
    })
  }

  renderFullPage (content) {
    const props = Object.assign(
      {},
      htmlOptions(this.parameters),
      { store: this.store, body: content }
    )
    return ReactDOMServer.renderToStaticMarkup(<Html {...props} />)
  }
}

export default RenderEngine
