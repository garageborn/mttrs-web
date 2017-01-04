/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { injectIntl, defineMessages } from 'react-intl'
import MenuCategoriesItem from '../MenuCategoriesItem'
import topStoriesIcon from '../../assets/logo-mttrs-alt-mobile.png'
import styles from './styles.css'

const messages = defineMessages({
  topStories: {
    id: 'header.topStories',
    defaultMessage: 'Top Stories'
  }
})

class MenuCategories extends Component {
  render () {
    const { categories, closeMenu } = this.props
    const { formatMessage } = this.props.intl
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
            <p className={styles.topStoriesTitle}>{formatMessage(messages.topStories)}</p>
          </div>
        </Link>
        <div className={styles.categories}>
          {categories.map((category) => <MenuCategoriesItem closeMenu={closeMenu} key={category.id} category={category} />)}
        </div>
      </div>
    )
  }
}

MenuCategories.propTypes = {
  categories: PropTypes.array.isRequired,
  closeMenu: PropTypes.func.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(MenuCategories)
