import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './styles.css'

const NavItem = ({ name, url }) => {
  return (
    <li className={styles.item}>
      <Link to={url} className={styles.itemLink} activeClassName={styles.active}>
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
