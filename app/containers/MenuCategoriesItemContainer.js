/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import MenuCategoriesItem from '../components/MenuCategoriesItem'

class MenuCategoriesItemContainer extends Component {
  render () {
    return (
      <MenuCategoriesItem isActive={this.activeStatus} category={this.props.category} />
    )
  }

  get activeStatus () {
    return this.props.activeSlug === this.props.category.slug
  }
}

MenuCategoriesItemContainer.propTypes = {
  activeSlug: PropTypes.string.isRequired,
  category: PropTypes.object.isRequired
}

let mapStateToProps = (state, ownProps) => {
  return {
    activeSlug: state.routing.locationBeforeTransitions.pathname.substr(1) // FIXME: FUGLY!
  }
}

export default connect(mapStateToProps)(MenuCategoriesItemContainer)
