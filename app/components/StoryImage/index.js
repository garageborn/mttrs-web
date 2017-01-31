import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { linkPath } from '../../utils/RoutesHelper'
import LazyLoad from 'react-lazy-load'
import * as cloudinary from '../../utils/Cloudinary'
import styles from './styles.css'

class StoryImage extends Component {
  renderImage () {
    const { mainLink } = this.props
    if (!this.mainLink.image_source_url) return
    let options = {
      type: 'fetch', width: 120, height: 90, crop: 'fill', secure: true
    }

    return (
      <Link
        to={linkPath(mainLink.slug)}
        className={styles.link}
        target='_blank'
      >
        <LazyLoad height={90} width={120} offset={300}>
          <img
            className={styles.image}
            alt={this.mainLink.title}
            src={cloudinary.url(this.mainLink.image_source_url, options)}
          />
        </LazyLoad>
      </Link>
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
  mainLink: PropTypes.object.isRequired
}

export default StoryImage
