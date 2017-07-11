/* eslint-disable react/jsx-no-bind */
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import LazyLoad from 'react-lazy-load'
import classNames from 'classnames'
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
    if (!this.mainLink.image.thumb) this.setState({ status: 'error' })
  }

  getSource () {
    if (this.state.status === 'error') return
    return this.getImage()
  }

  getImage () {
    return this.mainLink.image.thumb
  }

  handleImageError () {
    this.setState({ status: 'error' })
  }

  render () {
    return (
      <aside className={this.containerStyles} itemScope itemType='http://schema.org/ImageObject'>
        <Link
          to={linkPath(this.mainLink.slug)}
          className={styles.link}
          target='_blank'
          onMouseOver={() => this.props.handleMouseOver(true)}
          onMouseOut={() => this.props.handleMouseOver(false)}
          itemProp='url'
        >
          {this.renderImage}
        </Link>
      </aside>
    )
  }

  get renderImage () {
    if (this.state.status === 'error') return <Placeholder story={this.props.story} />
    return (
      <LazyLoad height={90} width={120} offset={300}>
        <img
          onError={this.handleImageError}
          className={styles.image}
          alt={this.mainLink.title}
          src={this.getSource()}
          itemProp='image'
        />
      </LazyLoad>
    )
  }

  get mainLink () {
    return this.props.story.main_link
  }

  get containerStyles () {
    return classNames({
      [styles.container]: true,
      [styles.active]: this.props.active
    })
  }
}

StoryImage.propTypes = {
  story: PropTypes.shape({
    main_link: PropTypes.object.isRequired
  }).isRequired,
  handleMouseOver: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

export default StoryImage
