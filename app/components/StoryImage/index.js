import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import LazyLoad from 'react-lazy-load'
import * as cloudinary from '../../utils/Cloudinary'
import { linkPath } from '../../utils/RoutesHelper'
import Placeholder from './components/Placeholder'
import styles from './styles.css'

class StoryImage extends Component {
  constructor () {
    super()
    this.handleImageError = this.handleImageError.bind(this)
    this.state = { status: 'loading' }
  }

  componentWillMount () {
    if (!this.mainLink.image_source_url) this.setState({ status: 'error' })
  }

  getSource () {
    if (this.state.status === 'error') return
    return this.getImage()
  }

  getImage () {
    let options = {
      type: 'fetch', width: 120, height: 90, crop: 'fill', secure: true
    }
    return cloudinary.url(this.mainLink.image_source_url, options)
  }

  handleImageError () {
    this.setState({ status: 'error' })
  }

  render () {
    return (
      <aside className={styles.container}>
        {this.renderImage}
      </aside>
    )
  }

  get renderImage () {
    if (this.state.status === 'error') return <Placeholder story={this.props.story} />
    return (
      <Link
        to={linkPath(this.mainLink.slug)}
        className={styles.link}
        target='_blank'
      >
        <LazyLoad height={90} width={120} offset={300}>
          <img
            onError={this.handleImageError}
            className={styles.image}
            alt={this.mainLink.title}
            src={this.getSource()}
          />
        </LazyLoad>
      </Link>
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
