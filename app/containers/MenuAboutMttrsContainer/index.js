import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { UIActions } from '../../actions/index'
import Onboarding from '../../components/Onboarding'
import MenuAboutMttrs from '../../components/MenuAboutMttrs'

class MenuAboutMttrsContainer extends Component {
  constructor () {
    super()

    this.openOnboarding = this.openOnboarding.bind(this)
  }

  render () {
    return <MenuAboutMttrs openOnboarding={this.openOnboarding} />
  }

  openOnboarding () {
    this.props.dispatch(UIActions.openModal('onboarding', React.createElement(Onboarding)))
  }
}

MenuAboutMttrsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(MenuAboutMttrsContainer)
