import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class PublisherTag extends Component {
  render () {
    const { name, title, url } = this.props
    return (
      <Link to={url} title={title} target='_blank'>
        <span>{name}</span>
      </Link>
    )
  }
}

PublisherTag.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default PublisherTag
