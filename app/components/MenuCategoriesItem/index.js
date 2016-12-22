import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { categoryPath } from '../../utils/RoutesHelper'
import * as cloudinary from '../../common/utils/Cloudinary'
import styles from './styles.css'

class MenuCategoriesItem extends Component {
  render () {
    const { category } = this.props
    return (
      <Link to={categoryPath(category.slug)} className={styles.category}>
        <div className={styles.container}>
          <img className={styles.icon} src={this.getIcon()} alt='' />
          <p className={styles.title} style={{color: category.color}}>{category.name}</p>
        </div>
      </Link>
    )
  }

  getIcon () {
    const { category } = this.props
    if (!category.icon_id) return

    let options = {
      secure: true
    }

    return cloudinary.id(category.icon_id, options)
  }
}

MenuCategoriesItem.propTypes = {
  category: PropTypes.object.isRequired
}

export default MenuCategoriesItem
