import React, { Component, PropTypes } from 'react'
import NavItem from '../NavItem'
import { rootPath, categoryPath } from '../../utils/RoutesHelper'
import styles from './styles.css'

class Nav extends Component {
  render () {
    return (
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <NavItem name='Top Stories' url={rootPath} color='#FF5606' />
          {this.categoriesItems}
          <NavItem name='Publishers' url='/publishers' color='#999' />
        </ul>
      </nav>
    )
  }

  get categoriesItems () {
    const { categories, loading } = this.props.data
    if (loading) return
    return categories.map((category) => {
      return <NavItem key={category.id} name={category.name} color={category.color} url={categoryPath(category.slug)} />
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
