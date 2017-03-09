import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './styles.css'

const MenuCategoriesItem = ({ to, name, color, closeMenu }) => (
  <Link
    to={to}
    onClick={closeMenu}
    className={styles.item}
    activeStyle={{ color }}
    activeClassName={styles.active}
  >
    <span className={styles.category}>{name}</span>
    <div className={styles.marker} style={{backgroundColor: color}} />
  </Link>
)

MenuCategoriesItem.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired
}

export default MenuCategoriesItem
