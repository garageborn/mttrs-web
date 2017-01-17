import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { categoryPath } from '../../utils/RoutesHelper'
import styles from './styles.css'

const MenuCategoriesItem = ({ category, closeMenu }) => {
  return (
    <Link
      onClick={closeMenu}
      to={categoryPath(category.slug)}
      className={styles.category}
      activeClassName={styles.active}
      style={{backgroundColor: category.color}}
    >
      {category.name}
    </Link>
  )
}

MenuCategoriesItem.propTypes = {
  category: PropTypes.object.isRequired,
  closeMenu: PropTypes.func.isRequired
}

export default MenuCategoriesItem
