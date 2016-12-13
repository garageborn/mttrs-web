import React from 'react'
import { match } from 'react-router'
import Routes from '../config/Routes'
import renderEngine from './renderEngine'
import Setup from '../config/Setup'
import sentry from './sentry'

let render = (renderProps, request, response) => {
  try {
    renderEngine(renderProps, request)
      .then((html) => { response.status(200).send(html) })
      .catch(error => { raise(response, error) })
  } catch(error) {
    raise(response, error)
  }
}

let requestHandler = (request, response) => {
  Setup.fromRequest(request)
  let routes = Routes.all()
  return match({ routes: routes, location: request.url }, (error, redirect, renderProps) => {
    if (error) {
      raise(response, error)
    } else if (redirect) {
      response.redirect(302, redirect.pathname + redirect.search)
    } else if (renderProps) {
      render(renderProps, request, response)
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

export default requestHandler
