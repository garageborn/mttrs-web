import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Menu from '../components/Menu'

class MenuContainer extends Component {
  render () {
    return this.renderMenu()
  }

  renderMenu () {
    const {UIReducer} = this.props
    if (!UIReducer.menu.isOpen) return null
    return <Menu isOpen={UIReducer.menu.isOpen} />
  }
}

MenuContainer.propTypes = {
  UIReducer: PropTypes.shape({
    menu: PropTypes.shape({
      isOpen: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired
}

let mapStateToProps = (state, ownProps) => {
  return {
    UIReducer: state.UIReducer
  }
}

export default connect(mapStateToProps)(MenuContainer)
