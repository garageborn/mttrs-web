import React, { Component, PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { categoryPath } from '../../utils/RoutesHelper'
import { properties } from '../../utils/variables'
import MenuCategoriesItem from '../MenuCategoriesItem'
import styles from './styles.css'

const messages = defineMessages({
  topStories: {
    id: 'header.topStories'
  },

  publishers: {
    id: 'menu.publishers'
  }
})

class MenuCategories extends Component {
  render () {
    return (
      <div className={styles.container}>
        <p>Categorias</p>
        <div className={styles.categories}>
          {this.topStories}
          {this.categories}
        </div>
        {this.publishers}
      </div>
    )
  }

  get topStories () {
    const { intl, closeMenu } = this.props

    return (
      <MenuCategoriesItem
        to='/'
        name={intl.formatMessage(messages.topStories)}
        color={properties.mttrsOrange}
        closeMenu={closeMenu}
      />
    )
  }

  get categories () {
    const { categories, closeMenu } = this.props

    return categories.map(category =>
      <MenuCategoriesItem
        to={categoryPath(category.slug)}
        key={category.id}
        name={category.name}
        color={category.color}
        closeMenu={closeMenu}
      />
    )
  }

  get publishers () {
    const { intl, closeMenu } = this.props

    return (
      <MenuCategoriesItem
        to='/publishers'
        name={intl.formatMessage(messages.publishers)}
        color={properties.mttrsGray}
        closeMenu={closeMenu}
      />
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
