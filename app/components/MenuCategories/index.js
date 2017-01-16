import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { injectIntl, defineMessages } from 'react-intl'
import MenuCategoriesItem from '../MenuCategoriesItem'
import styles from './styles.css'

const messages = defineMessages({
  topStories: {
    id: 'header.topStories',
    defaultMessage: 'Top Stories'
  },

  publishers: {
    id: 'menu.publishers',
    defaultMessage: 'Publishers'
  }
})

const MenuCategories = ({categories, closeMenu, intl}) => {
  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <Link
          to='/'
          onClick={closeMenu}
          className={styles.category}
          style={{backgroundColor: '#FF5606'}}
        >
          {intl.formatMessage(messages.topStories)}
        </Link>
        {categories.map((category) => <MenuCategoriesItem closeMenu={closeMenu} key={category.id} category={category} />)}
        <Link
          to='/publishers'
          onClick={closeMenu}
          className={styles.category}
          style={{backgroundColor: '#999'}}
        >
          {intl.formatMessage(messages.publishers)}
        </Link>
      </div>
    </div>
  )
}

MenuCategories.propTypes = {
  categories: PropTypes.array.isRequired,
  closeMenu: PropTypes.func.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(MenuCategories)
