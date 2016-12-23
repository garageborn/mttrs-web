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
      <MenuCategoriesItem closeMenu={this.closeMenu} isActive={this.activeStatus} category={this.props.category} />
    )
  }

  get activeStatus () {
    return this.props.activeSlug === this.props.category.slug
  }

  closeMenu () {
    this.props.dispatch(UIActions.closeMenu())
  }
}

MenuCategoriesItemContainer.propTypes = {
  activeSlug: PropTypes.string.isRequired,
  category: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

let mapStateToProps = (state, ownProps) => {
  return {
    activeSlug: state.routing.locationBeforeTransitions.pathname.substr(1) // FIXME: FUGLY!
  }
}

export default connect(mapStateToProps)(MenuCategoriesItemContainer)
