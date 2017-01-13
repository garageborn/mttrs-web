import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './styles.css'

const NavItem = ({ name, color, url }) => {
  return (
    <li className={styles.item}>
      <Link to={url} className={styles.link} activeClassName={styles.active}>
        <span className={styles.name}>{name}</span>
        <div>
          <span className={styles.color} style={{backgroundColor: color}} />
        </div>
      </Link>
    </li>
  )
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default NavItem
