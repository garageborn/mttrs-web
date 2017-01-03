import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import * as cloudinary from '../../utils/Cloudinary'
import styles from './styles.css'

class PublisherIcon extends Component {

  getImageClass () {
    const { size } = this.props
    return classNames({
      [styles.image]: true,
      [styles.imageSmall]: size === 'small',
      [styles.imageBig]: size === 'big'
    })
  }

  render () {
    return <img className={this.getImageClass()} src={this.categoryLogo} alt={this.props.category.name} />
  }
  get categoryLogo () {
    const { category } = this.props
    if (!category.icon_id) return
    const options = { secure: true, height: 50, width: 50, radius: 'max' }
    const uri = cloudinary.id(category.icon_id, options)
    return uri
  }
}

PublisherIcon.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon_id: PropTypes.string.isRequired
  }).isRequired,
  size: PropTypes.string.isRequired
}

export default PublisherIcon
