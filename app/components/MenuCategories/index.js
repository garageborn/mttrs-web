import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import MenuCategoriesItem from '../MenuCategoriesItem'
import topStoriesIcon from '../../assets/logo-mttrs-alt-mobile.png'
import styles from './styles.css'

const MenuCategories = ({categories, closeMenu}) => {
  return (
    <div className={styles.container}>
      <Link
        to='/'
        onClick={closeMenu}
        className={styles.topStories}
        activeClassName={styles.topStoriesActive}
      >
        <div className={styles.topStoriesWrapper}>
          <img src={topStoriesIcon} className={styles.icon} alt='' />
          <p className={styles.topStoriesTitle}>Top Stories</p>
        </div>
      </Link>
      <div className={styles.categories}>
        {categories.map((category) => <MenuCategoriesItem closeMenu={closeMenu} key={category.id} category={category} />)}
      </div>
    </div>
  )
}

MenuCategories.propTypes = {
  categories: PropTypes.array.isRequired,
  closeMenu: PropTypes.func.isRequired
}

export default MenuCategories
