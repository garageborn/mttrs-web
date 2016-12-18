import React, { Component, PropTypes } from 'react'
import { ApolloProvider } from 'react-apollo'
import { renderToStringWithData }  from 'react-apollo/server'

class Wrapper extends Component {
  // all React "prop"erty providers go here.
  // e.g. redux Provider, react-intl IntlProvider.
  //
  render () {
    const { store, apolloClient, children } = this.props

    return (
      <ApolloProvider store={store} client={apolloClient}>
        {children}
      </ApolloProvider>
    )
  }
}

Wrapper.propTypes = {
  store: PropTypes.object.isRequired,
  apolloClient: PropTypes.object.isRequired
}

// export default function (apolloClient, conf) {
//   let props = Object.assign({}, {apolloClient}, conf)
//   const component = <Wrapper {...props} />
//
//   return renderToStringWithData(component).then((content) => {
//     // console.log('render to string with data', content)
//     return content
//     // return renderFullPage(content, store.getState())
//   })
// }


export default function (apolloClient, conf) {
  let props = Object.assign({}, {apolloClient}, conf)

  // console.log('----------------------props', conf)
  return <Wrapper {...props} />
}
