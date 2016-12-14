import React, { Component, PropTypes } from 'react'
import * as cloudinary from '../../common/utils/Cloudinary'
import ParseDate from '../../common/utils/ParseDate'
import styles from './styles.css'

class StoryImage extends Component {
  renderImage() {
    if (!this.props.mainLink.image_source_url) return
    let options = {
      type: 'fetch',
      width: 200,
      height: 200,
      crop: 'fit',
      secure: true
    }
    return (
      <img
        className={styles.image}
        alt={this.props.mainLink.title}
        src={cloudinary.url(this.props.mainLink.image_source_url, options)}
      />
    )
  }

  render() {
    return <a href={this.props.mainLink.url} target='_blank'>{this.renderImage()}</a>
  }
}

StoryImage.propTypes = {
  mainLink: PropTypes.object.isRequired,
}

export default StoryImage
