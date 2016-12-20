import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import withQuery from './NavContainer.gql'
import Nav from '../components/Nav'

const NavContainer = ({data, menu}) => {
  return (
    <Nav data={data} menu={menu} />
  )
}

NavContainer.propTypes = {
  data: PropTypes.object.isRequired,
  menu: PropTypes.object.isRequired
}

let mapStateToProps = (state, ownProps) => {
  return {
    menu: state.UIReducer.menu
  }
}

const NavContainerWithQuery = withQuery(NavContainer)
export default connect(mapStateToProps)(NavContainerWithQuery)
