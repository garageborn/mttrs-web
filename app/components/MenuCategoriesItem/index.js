import React, { PropTypes } from 'react'
import styles from './styles.css'

const MenuCategoriesItem = ({category}) => {
  return (
    <div className={styles.container}>
      {category.name}
    </div>
  )
}

MenuCategoriesItem.propTypes = {
  category: PropTypes.object.isRequired
}

export default MenuCategoriesItem
