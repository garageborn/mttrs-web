import React from 'react'
import ReactDOMServer from 'react-dom/server'
import 'isomorphic-fetch'
import {ApolloProvider} from 'react-apollo'
import {renderToStringWithData} from 'react-apollo/server'
import {RouterContext} from 'react-router'
import htmlOptions from './htmlOptions'
import Html from '../Html'

let renderEngine = ({ store, apolloClient, parameters, renderProps }) => {
  const component = (
    <ApolloProvider store={store} client={apolloClient}>
      <RouterContext {...renderProps} />
    </ApolloProvider>
  )

  return renderToStringWithData(component).then((content) => {
    return renderFullPage({
      content,
      store,
      htmlOptions: htmlOptions(parameters)
    })
  })
}

let renderFullPage = ({content, store, htmlOptions}) => {
  const props = Object.assign({}, htmlOptions, { store, body: content })
  const html = <Html {...props} />
  return ReactDOMServer.renderToStaticMarkup(html)
}

export default renderEngine
