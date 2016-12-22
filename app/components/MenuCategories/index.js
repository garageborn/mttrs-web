import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './styles.css'
import MenuCategoriesItem from '../MenuCategoriesItem'

const MenuCategories = ({categories}) => {
  return (
    <div className={styles.container}>
      <Link to='/'>
        <div>
          <p>Top Stories</p>
        </div>
      </Link>
      <div className={styles.categories}>
        {categories.map((category) => <MenuCategoriesItem key={category.id} category={category} />)}
      </div>
    </div>
  )
}

MenuCategories.propTypes = {
  categories: PropTypes.array.isRequired
}

export default MenuCategories
