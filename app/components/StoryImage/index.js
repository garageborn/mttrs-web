import React, { Component, PropTypes } from 'react'
import * as cloudinary from '../../utils/Cloudinary'
import styles from './styles.css'

class StoryImage extends Component {
  renderImage () {
    const {story, handleVisitedStory} = this.props
    if (!this.mainLink.image_source_url) return
    let options = {
      type: 'fetch', width: 120, height: 90, crop: 'fill', secure: true
    }
    return (
      <a
        onClick={() => handleVisitedStory(story)}
        href={this.mainLink.url}
        className={styles.link}
        target='_blank'
      >
        <img
          className={styles.image}
          alt={this.mainLink.title}
          src={cloudinary.url(this.mainLink.image_source_url, options)}
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

  get mainLink () {
    return this.props.story.main_link
  }
}

StoryImage.propTypes = {
  story: PropTypes.shape({
    main_link: PropTypes.object.isRequired
  }).isRequired,
  handleVisitedStory: PropTypes.func.isRequired
}

export default StoryImage
