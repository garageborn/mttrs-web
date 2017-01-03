import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import { UIActions } from '../actions/index'
import Menu from '../components/Menu'
import menuAnimations from '../styles/menu-animations.css'

class MenuContainer extends Component {
  constructor () {
    super()
    this.closeMenu = this.closeMenu.bind(this)
  }
  render () {
    return (
      <ReactCSSTransitionGroup transitionName={menuAnimations} transitionAppear transitionEnter transitionAppearTimeout={150} transitionEnterTimeout={150} transitionLeaveTimeout={150}>
        {this.renderMenu()}
      </ReactCSSTransitionGroup>
    )
  }

  renderMenu () {
    const {UIReducer} = this.props
    if (!UIReducer.menu.isOpen) return null
    return (
      <Menu key='mobileMenu' closeMenu={this.closeMenu} isOpen={UIReducer.menu.isOpen} />
    )
  }

  closeMenu () {
    const {dispatch} = this.props
    dispatch(UIActions.closeMenu())
  }
}

MenuContainer.propTypes = {
  UIReducer: PropTypes.shape({
    menu: PropTypes.shape({
      isOpen: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired
}

let mapStateToProps = (state, ownProps) => {
  return {
    UIReducer: state.UIReducer
  }
}

export default connect(mapStateToProps)(MenuContainer)
