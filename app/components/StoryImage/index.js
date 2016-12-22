import React, { Component, PropTypes } from 'react'
import * as cloudinary from '../../utils/Cloudinary'
import styles from './styles.css'

class StoryImage extends Component {
  renderImage () {
    if (!this.props.mainLink.image_source_url) return
    let options = {
      type: 'fetch', width: 120, height: 90, crop: 'fill', secure: true
    }
    return (
      <a href={this.props.mainLink.url} className={styles.link} target='_blank'>
        <img
          className={styles.image}
          alt={this.props.mainLink.title}
          src={cloudinary.url(this.props.mainLink.image_source_url, options)}
        />
      </a>
    )
  }

  render () {
    return (
      <aside className={styles.container}>
        {this.renderImage()}
      </aside>
    )
  }
}

StoryImage.propTypes = {
  mainLink: PropTypes.object.isRequired,
}

export default StoryImage
