import React from 'react'
import 'isomorphic-fetch'
import { ApolloProvider, renderToStringWithData } from 'react-apollo'
import { RouterContext } from 'react-router'
import path from 'path'
import pug from 'pug'
import configureStore from '../config/configureStore.production'
import configureApollo from '../config/configureApollo'

const templatePath = path.resolve(__dirname, 'templates/index.pug')

let handleRender = (renderProps, request) => {
  const apolloClient = configureApollo({
    ssrMode: true,
    // opts: { headers: request.headers }
  })
  const store = configureStore({}, apolloClient)

  const component = (
    <ApolloProvider store={store} client={apolloClient}>
      <RouterContext {...renderProps} />
    </ApolloProvider>
  )

  return renderToStringWithData(component).then((content) => {
    return renderFullPage(content, store.getState())
  })
}

let defaultData = {
  MTTRS_FRONTEND_SENTRY_PUBLIC_DSN: process.env.MTTRS_FRONTEND_SENTRY_PUBLIC_DSN
}

let renderFullPage = (html, state) => {
  let initialState = JSON.stringify(state).replace(/\//g, '\\/') || 'null'
  let data = Object.assign({}, defaultData, {
    html: html,
    initialState: initialState
  })
  return pug.renderFile(templatePath, data)
}

export default handleRender
