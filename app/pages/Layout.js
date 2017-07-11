import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import _isNil from 'lodash/isNil'
import HeaderContainer from '../containers/HeaderContainer'
import MenuContainer from '../containers/MenuContainer'
import injectSettings from '../config/injectSettings'
import sentry from '../utils/Sentry'
import favicons from '../utils/Favicons'

class Layout extends Component {
  componentDidMount () {
    this.context.router.listen(location => window.scrollTo(0, 0))
  }

  render () {
    const { showHeader, showMenu } = this.props
    return (
      <div>
        <Helmet {...this.helmet()} />
        <HeaderContainer showHeader={showHeader} />
        {this.props.children}
        <MenuContainer showMenu={showMenu} />
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
      ...metas,
      ...favicons.meta
    ]
  }

  get links () {
    return [
      ...favicons.links
    ]
  }

  get scripts () {
    return sentry
  }
}

Layout.contextTypes = {
  router: React.PropTypes.object
}

Layout.propTypes = {
  settings: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  metas: PropTypes.array,
  showHeader: PropTypes.bool,
  showMenu: PropTypes.bool
}

Layout.defaultProps = {
  showHeader: true,
  showMenu: true
}

export default injectSettings(Layout)
