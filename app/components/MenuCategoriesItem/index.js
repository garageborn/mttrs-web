import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './styles.css'

const MenuCategoriesItem = ({ to, name, color, closeMenu }) => (
  <div className={styles.item}>
    <Link to={to} onClick={closeMenu} className={styles.category} activeClassName={styles.active}>
      {name}
    </Link>
    <div className={styles.marker} style={{backgroundColor: color}} />
  </div>
)

MenuCategoriesItem.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired
}

export default MenuCategoriesItem
