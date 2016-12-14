import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './navitem.css'

const NavItem = ({ name, url }) => {
  return (
    <li>
      <Link to={url} title={name} activeClassName={styles.active}>
        <span>{name}</span>
      </Link>
    </li>
  )
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default NavItem
