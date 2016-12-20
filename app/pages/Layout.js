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
      title: this.props.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: this.props.description },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'shortcut icon', href: require('../assets/favicon.ico') },
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' }
      ]
    }
  }
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node
}

export default Layout
