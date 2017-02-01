import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import ModalContainer from '../containers/ModalContainer'
import MenuContainer from '../containers/MenuContainer'
import injectSettings from '../config/injectSettings'
import sentry from '../utils/Sentry'
import segment from '../utils/Segment'
import favicons from '../utils/Favicons'
import _isNil from 'lodash/isNil'

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
      meta: this.meta,
      link: this.links,
      script: this.scripts
    }
  }

  get meta () {
    let metas = []
    if (!_isNil(this.props.metas)) metas = this.props.metas
    return [
      { charset: 'utf-8' },
      { name: 'description', content: this.props.description },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...favicons.meta,
      ...metas
    ]
  }

  get links () {
    return [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      ...favicons.links
    ]
  }

  get scripts () {
    return [...sentry, ...segment]
  }
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  metas: PropTypes.array
}

export default injectSettings(Layout)
