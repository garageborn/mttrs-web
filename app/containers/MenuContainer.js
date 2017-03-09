import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import MediaQuery from 'react-responsive'
import { connect } from 'react-redux'
import { UIActions } from '../actions/index'
import { mediaQueries } from '../utils/variables'
import Menu from '../components/Menu'
import menuAnimations from '../styles/menu-animations.css'

class MenuContainer extends Component {
  constructor () {
    super()
    this.closeMenu = this.closeMenu.bind(this)
  }

  render () {
    return (
      <div>
        <ReactCSSTransitionGroup transitionName={menuAnimations} transitionAppear transitionEnter transitionAppearTimeout={330} transitionEnterTimeout={330} transitionLeaveTimeout={330}>
          {this.renderMenu()}
        </ReactCSSTransitionGroup>
        <MediaQuery query={mediaQueries.large} minDeviceWidth={1140}>
          <Menu closeMenu={this.closeMenu} />
        </MediaQuery>
      </div>
    )
  }

  renderMenu () {
    const { UIReducer } = this.props
    if (!UIReducer.menu.isOpen) return null
    return (
      <Menu closeMenu={this.closeMenu} isOpen={UIReducer.menu.isOpen} />
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
