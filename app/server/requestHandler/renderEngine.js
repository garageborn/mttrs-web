import React from 'react'
import 'isomorphic-fetch'
import { ApolloProvider } from 'react-apollo'
import { renderToStringWithData }  from 'react-apollo/server'
import { RouterContext } from 'react-router'
import path from 'path'
import pug from 'pug'

const templatePath = path.resolve(__dirname, 'templates/index.pug')

let renderEngine = ({ store, apolloClient, renderProps }) => {
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

export default renderEngine
