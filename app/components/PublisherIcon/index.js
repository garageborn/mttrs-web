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
    return (
      <div className={styles.container}>
        <img className={this.getImageClass()} src={this.publisherLogo} alt={this.props.publisher.name} />
      </div>
    )
  }
  get publisherLogo () {
    const { publisher } = this.props
    if (!publisher.icon_id) return
    const options = { secure: true, height: 50, width: 50, radius: 'max' }
    const uri = cloudinary.id(publisher.icon_id, options)
    return uri
  }
}

PublisherIcon.propTypes = {
  publisher: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon_id: PropTypes.string.isRequired
  }).isRequired,
  size: PropTypes.string.isRequired
}

export default PublisherIcon
