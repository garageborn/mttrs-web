import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import _isNil from 'lodash/isNil'
import Onboarding from '../components/Onboarding'
import HeaderContainer from '../containers/HeaderContainer'
import ModalContainer from '../containers/ModalContainer'
import MenuContainer from '../containers/MenuContainer'
import injectSettings from '../config/injectSettings'
import { UIActions } from '../actions/index'
import sentry from '../utils/Sentry'
import segment from '../utils/Segment'
import favicons from '../utils/Favicons'

class Layout extends Component {
  componentDidMount () {
    this.context.router.listen(location => window.scrollTo(0, 0))
  }

  componentWillReceiveProps (nextProps) {
    this.handleOnboarding(nextProps)
  }

  render () {
    const { showHeader, showMenu, showModal } = this.props
    return (
      <div>
        <Helmet {...this.helmet()} />
        <HeaderContainer showHeader={showHeader} />
        {this.props.children}
        <ModalContainer showModal={showModal} />
        <MenuContainer showMenu={showMenu} />
      </div>
    )
  }

  handleOnboarding (nextProps) {
    if (!nextProps.showOnboarding) return
    if (this.props.showOnboarding === nextProps.showOnboarding) return
    return (
      this.props.dispatch(
        UIActions.openModal(
          'onboarding',
          React.createElement(Onboarding)
        )
      )
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
    return [...sentry, segment]
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
  showModal: PropTypes.bool,
  showMenu: PropTypes.bool
}

Layout.defaultProps = {
  showHeader: true,
  showModal: true,
  showMenu: true
}

const mapStateToprops = state => ({
  showOnboarding: state.UIReducer.showOnboarding
})

export default connect(mapStateToprops)(injectSettings(Layout))
