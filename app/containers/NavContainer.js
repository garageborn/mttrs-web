import React, { PropTypes } from 'react'
import withQuery from './NavContainer.gql'
import Nav from '../components/Nav'

const NavContainer = (props) => {
  return (
    <Nav data={props.data} />
  )
}

NavContainer.propTypes = {
  data: PropTypes.object.isRequired
}

export default withQuery(NavContainer)
