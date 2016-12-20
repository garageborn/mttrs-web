import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

class Layout extends Component {
  render () {
    return (
      <div>
        <Helmet {...this.helmet()} />
        {this.props.children}
      </div>
    )
  }

  helmet () {
    return {
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  }
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
