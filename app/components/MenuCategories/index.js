import React, { PropTypes } from 'react'
import styles from './styles.css'
import MenuCategoriesItem from '../MenuCategoriesItem'

const MenuCategories = ({categories}) => {
  return (
    <div className={styles.container}>
      {categories.map((category) => <MenuCategoriesItem key={category.id} category={category} />)}
    </div>
  )
}

MenuCategories.propTypes = {
  categories: PropTypes.array.isRequired
}

export default MenuCategories
