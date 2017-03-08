import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { categoryPath } from '../../utils/RoutesHelper'
import styles from './styles.css'

const MenuCategoriesItem = ({ category, closeMenu }) => (
  <li className={styles.item}>
    <Link
      onClick={closeMenu}
      to={categoryPath(category.slug)}
      className={styles.category}
      activeClassName={styles.active}
    >
      {category.name}
    </Link>
    <div className={styles.marker} style={{backgroundColor: category.color}} />
  </li>
)

MenuCategoriesItem.propTypes = {
  category: PropTypes.object.isRequired,
  closeMenu: PropTypes.func.isRequired
}

export default MenuCategoriesItem
