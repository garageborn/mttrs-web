import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { UIActions } from '../actions/index'
import MenuCategoriesItem from '../components/MenuCategoriesItem'

class MenuCategoriesItemContainer extends Component {
  constructor () {
    super()
    this.closeMenu = this.closeMenu.bind(this)
  }
  render () {
    return (
      <MenuCategoriesItem closeMenu={this.closeMenu} category={this.props.category} />
    )
  }

  closeMenu () {
    this.props.dispatch(UIActions.closeMenu())
  }
}

MenuCategoriesItemContainer.propTypes = {
  category: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect()(MenuCategoriesItemContainer)
