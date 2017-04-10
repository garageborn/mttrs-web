import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import elementClass from 'element-class'
import { UIActions } from '../actions/index'
import Onboarding from '../components/Onboarding'
import Menu from '../components/Menu'

class MenuContainer extends Component {
  constructor () {
    super()
    this.closeMenu = this.closeMenu.bind(this)
    this.openOnboarding = this.openOnboarding.bind(this)
  }

  render () {
    if (!this.props.showMenu) return null
    const { UIReducer } = this.props
    return (
      <Menu
        closeMenu={this.closeMenu}
        isOpen={UIReducer.menu.isOpen}
        openOnboarding={this.openOnboarding}
      />
    )
  }

  closeMenu () {
    elementClass(document.body).remove('overflowHidden')
    this.props.dispatch(UIActions.closeMenu())
  }

  openOnboarding () {
    this.props.dispatch(UIActions.openModal('onboarding', React.createElement(Onboarding)))
  }
}

MenuContainer.propTypes = {
  UIReducer: PropTypes.shape({
    menu: PropTypes.shape({
      isOpen: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired
}

let mapStateToProps = (state, ownProps) => {
  return {
    UIReducer: state.UIReducer
  }
}

export default connect(mapStateToProps)(MenuContainer)
