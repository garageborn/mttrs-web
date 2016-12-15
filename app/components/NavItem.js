import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class NavItem extends Component {
  render () {
    const { name, url } = this.props
    return (
      <li>
        <Link to={url} title={name} activeClassName='active'>
          <span>{name}</span>
        </Link>
      </li>
    )
  }
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default NavItem
