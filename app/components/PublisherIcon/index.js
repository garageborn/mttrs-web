import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import styles from './styles.css'

class PublisherIcon extends Component {
  getImageClass () {
    const { size } = this.props
    return classNames({
      [styles.image]: true,
      [styles.imageSmall]: size === 'small',
      [styles.imageBig]: size === 'big',
      [styles.imageHuge]: size === 'huge'
    })
  }

  render () {
    return (
      <div className={styles.container}>
        <img
          className={this.getImageClass()}
          src={this.publisherLogo}
          alt={this.props.publisher.name}
        />
      </div>
    )
  }
  get publisherLogo () {
    return this.props.publisher.icon.medium
  }
}

PublisherIcon.propTypes = {
  publisher: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.shape({
      medium: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  size: PropTypes.string.isRequired
}

export default PublisherIcon
