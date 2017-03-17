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

  categories: {
    id: 'categories'
  },

  publishers: {
    id: 'menu.publishers'
  }
})

class MenuCategories extends Component {
  render () {
    return (
      <div className={styles.container}>
        <p className={styles.title}>{this.props.intl.formatMessage(messages.categories)}</p>
        <ul
          className={styles.categories}
          itemScope
          itemType='http://www.schema.org/SiteNavigationElement'
        >
          {this.topStories}
          {this.categories}
        </ul>
        {this.publishers}
      </div>
    )
  }

  get topStories () {
    const { intl, closeMenu } = this.props
    let li = React.createElement('li')

    return (
      <MenuCategoriesItem
        to='/'
        name={intl.formatMessage(messages.topStories)}
        color={properties.mttrsOrange}
        closeMenu={closeMenu}
        component={li}
        itemPropName='name'
        itemPropUrl='url'
      />
    )
  }

  get categories () {
    const { categories, closeMenu } = this.props
    let li = React.createElement('li')

    return categories.map(category =>
      <MenuCategoriesItem
        to={categoryPath(category.slug)}
        key={category.id}
        name={category.name}
        color={category.color}
        closeMenu={closeMenu}
        component={li}
        itemPropName='name'
        itemPropUrl='url'
      />
    )
  }

  get publishers () {
    const { intl, closeMenu } = this.props
    let div = React.createElement('div')

    return (
      <MenuCategoriesItem
        to='/publishers'
        name={intl.formatMessage(messages.publishers)}
        color={properties.mttrsGray}
        closeMenu={closeMenu}
        component={div}
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
