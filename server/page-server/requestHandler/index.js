import { match } from 'react-router'
import sentry from '../sentry'
import Renderer from './renderer'
import Setup from '../../../app/config/Setup'
import configureStore from '../../../app/config/configureStore'
import configureApollo from '../../../app/config/configureApollo'

class RequestHandler {
  constructor ({ request, response, parameters }) {
    console.log('\n\n---------------request handler constructor')
    Setup.fromRequest(request)
    console.log('Setup.timezone', Setup.timezone)
    this.apolloClient = configureApollo({ ssrMode: true })
    this.store = configureStore({}, this.apolloClient)
    this.renderer = new Renderer({ store: this.store, apolloClient: this.apolloClient, parameters })

    this.request = request
    this.response = response
    this.parameters = parameters
  }

  run () {
    try {
      require('../../../app/config/Routes')(this.apolloClient)
        .then(routes => this.requestHandler(routes))
        .catch(error => this.raise(error))
    } catch (error) {
      this.raise(error)
    }
  }

  requestHandler (routes) {
    console.log('request handler')
    match({ routes: routes, location: this.request.url }, (error, redirect, renderProps) => {
      if (error) {
        this.raise(this.response, error)
      } else if (redirect) {
        this.response.redirect(302, redirect.pathname + redirect.search)
      } else if (renderProps) {
        this.render(renderProps)
      } else {
        this.response.status(404).send('Not found')
      }
    })
  }

  render (renderProps) {
    try {
      this.renderer.run(renderProps)
        .then(html => this.response.status(200).send(html))
        .catch(error => this.raise(error))
    } catch (error) {
      this.raise(error)
    }
  }

  raise (error) {
    sentry.captureException(error)
    let message = [error.message].concat(error.stack).join('\n\n')
    this.response.setHeader('content-type', 'text/plain')
    this.response.status(500).send(message)
  }
}

export default RequestHandler
