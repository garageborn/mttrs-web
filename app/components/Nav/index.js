import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import NavItem from '../NavItem'
import { categoryPath } from '../../utils/RoutesHelper'
import styles from './styles.css'

class Nav extends Component {
  render () {
    const navClasses = classNames({
      [styles.nav]: true,
      [styles.navActive]: this.props.menu.isOpen
    })
    return (
      <nav className={navClasses}>
        <ul className={styles.navList}>
          {this.categoriesItems}
        </ul>
      </nav>
    )
  }

  get categoriesItems () {
    const { categories, loading } = this.props.data
    if (loading) return
    return categories.map((category) => {
      return <NavItem key={category.id} name={category.name} url={categoryPath(category.slug)} />
    })
  }
}

Nav.propTypes = {
  data: PropTypes.shape({
    categories: PropTypes.array,
    loading: PropTypes.bool.isRequired
  }).isRequired,
  menu: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired
  })
}

export default Nav
