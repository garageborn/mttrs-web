import React, { Component, PropTypes } from 'react'
import NavItem from '../NavItem'
import { categoryPath } from '../../utils/RoutesHelper'
import styles from './styles.css'

class Nav extends Component {
  render () {
    return (
      <nav className={styles.nav}>
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
  }).isRequired
}

export default Nav
