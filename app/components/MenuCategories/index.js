import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import MenuCategoriesItemContainer from '../../containers/MenuCategoriesItemContainer'
import TopStoriesLogo from '../../assets/logo-mttrs-mobile.svg'
import styles from './styles.css'

const MenuCategories = ({categories}) => {
  return (
    <div className={styles.container}>
      <Link to='/' className={styles.topStories}>
        <div className={styles.topStoriesWrapper}>
          <TopStoriesLogo className={styles.topStoriesIcon} />
          <p className={styles.topStoriesTitle}>Top Stories</p>
        </div>
      </Link>
      <div className={styles.categories}>
        {categories.map((category) => <MenuCategoriesItemContainer key={category.id} category={category} />)}
      </div>
    </div>
  )
}

MenuCategories.propTypes = {
  categories: PropTypes.array.isRequired
}

export default MenuCategories
