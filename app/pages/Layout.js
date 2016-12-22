import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import ModalContainer from '../containers/ModalContainer'
import MenuContainer from '../containers/MenuContainer'
import injectSettings from '../config/injectSettings'
import sentry from '../utils/Sentry'
import segment from '../utils/Segment'

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
      htmlAttributes: { lang: this.props.settings.language },
      title: this.props.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: this.props.description },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'shortcut icon', href: require('../assets/favicon.ico') },
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' }
      ],
      script: [...sentry, ...segment]
    }
  }
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node
}

export default injectSettings(Layout)
