import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import ModalContainer from '../containers/ModalContainer'
import MenuContainer from '../containers/MenuContainer'

class Layout extends Component {
  render () {
    return (
      <div>
        <Helmet {...this.helmet()} />
        {this.props.children}
        <ModalContainer />
        <MenuContainer />
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
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' }
      ]
    }
  }
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Layout
