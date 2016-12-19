import { match } from 'react-router'
import { buildRoutes } from '../../../app/config/Routes'
import sentry from '../sentry'
import renderEngine from './renderEngine'

let render = ({ store, apolloClient, response, parameters, renderProps }) => {
  try {
    renderEngine({ store, apolloClient, parameters, renderProps })
      .then((html) => { response.status(200).send(html) })
      .catch(error => { raise(response, error) })
  } catch (error) {
    raise(response, error)
  }
}

let requestHandler = ({ store, apolloClient, request, response, parameters, routes }) => {
  match({ routes: routes, location: request.url }, (error, redirect, renderProps) => {
    if (error) {
      raise(response, error)
    } else if (redirect) {
      response.redirect(302, redirect.pathname + redirect.search)
    } else if (renderProps) {
      render({ store, apolloClient, response, parameters, renderProps })
    } else {
      response.status(404).send('Not found')
    }
  })
}

let raise = (response, error) => {
  sentry.captureException(error)
  let message = [error.message].concat(error.stack).join('\n\n')
  response.setHeader('content-type', 'text/plain')
  response.status(500).send(message)
}

function matchRequest ({ store, apolloClient, request, response, parameters }) {
  try {
    buildRoutes(apolloClient)
      .then(routes => requestHandler({ store, apolloClient, request, response, parameters, routes }))
      .catch(error => raise(response, error))
  } catch (error) {
    raise(response, error)
  }
}

export default matchRequest
