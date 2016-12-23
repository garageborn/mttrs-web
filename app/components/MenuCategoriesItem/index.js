import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { categoryPath } from '../../utils/RoutesHelper'
import * as cloudinary from '../../utils/Cloudinary'
import styles from './styles.css'

class MenuCategoriesItem extends Component {
  render () {
    const { category, closeMenu } = this.props
    return (
      <Link
        onClick={closeMenu}
        to={categoryPath(category.slug)}
        className={styles.category}
        activeClassName={styles.active}
        activeStyle={this.activeStyle()}
      >
        <div className={styles.container}>
          <img className={styles.icon} src={this.getIcon()} alt={category.name} />
          <p className={styles.title} style={{color: category.color}}>{category.name}</p>
        </div>
      </Link>
    )
  }

  activeStyle () {
    const { category } = this.props
    return {
      backgroundColor: category.color
    }
  }

  getIcon () {
    const { category } = this.props
    if (!category.icon_id) return

    let options = {
      secure: true
    }

    if (this.props.isActive) {
      options = {
        ...options,
        effect: 'colorize',
        color: '#FFF'
      }
    }

    return cloudinary.id(category.icon_id, options)
  }
}

MenuCategoriesItem.propTypes = {
  category: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired
}

export default MenuCategoriesItem
