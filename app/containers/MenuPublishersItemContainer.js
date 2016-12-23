/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { UIActions } from '../actions/index'
import MenuPublishersItem from '../components/MenuPublishersItem'

class MenuCategoriesItemContainer extends Component {
  constructor () {
    super()
    this.closeMenu = this.closeMenu.bind(this)
  }
  render () {
    return (
      <MenuPublishersItem closeMenu={this.closeMenu} publisher={this.props.publisher} />
    )
  }

  closeMenu () {
    this.props.dispatch(UIActions.closeMenu())
  }
}

MenuCategoriesItemContainer.propTypes = {
  publisher: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect()(MenuCategoriesItemContainer)
