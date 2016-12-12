import React from 'react'
import { ApolloProvider } from 'react-apollo'
import _flattenDeep from 'lodash/flattenDeep'
import { renderToString } from 'react-dom/server'
import { Router, RouterContext } from 'react-router'
import path from 'path'
import pug from 'pug'
import apolloClient from '../config/apolloClient'

require('css-modules-require-hook/preset')

const templatePath = path.resolve(__dirname, 'templates/index.pug')

let handleRender = (renderProps, store) => {
  let promises = mapPromises(store, renderProps)
  return Promise.all(promises).then(() => {
    return render(store, renderProps)
  })
}

let mapPromises = (store, renderProps) => {
  let { components, params, routes } = renderProps
  let promises = components
    .filter((component) => {
      return component.fetchData
    })
    .map((component) => {
      let options = { dispatch: store.dispatch, params: params, route: routes[0] }
      return component.fetchData(options)
    })
  return _flattenDeep(promises)
}

let render = (store, renderProps) => {
  const finalState = store.getState()
  const html = renderToString(
    <ApolloProvider store={store} client={apolloClient}>
      <RouterContext {...renderProps} />
    </ApolloProvider>
  )
  return renderFullPage(html, finalState)
}

let defaultData = {
  MTTRS_FRONTEND_SENTRY_PUBLIC_DSN: process.env.MTTRS_FRONTEND_SENTRY_PUBLIC_DSN
}

let renderFullPage = (html, state) => {
  let initialState = JSON.stringify(state).replace(/\//g, '\\/') || 'null'
  let data = Object.assign({}, defaultData, { html: html, initialState: initialState })
  return pug.renderFile(templatePath, data)
}

export default handleRender
