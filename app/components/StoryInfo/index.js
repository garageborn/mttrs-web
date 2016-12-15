import React, { Component, PropTypes } from 'react'
import PublisherIcon from '../PublisherIcon'
import styles from './styles.css'

class StoryMetadata extends Component {
  renderPublishers () {
    if (this.props.otherLinks.length === 0) return this.renderMainPublisherName()
    return this.renderPublishersText()
  }

  renderPublishersText () {
    return <p>{this.renderMainPublisherName()} and {this.renderOtherLinks()}</p>
  }

  renderMainPublisherName () {
    return <a href='#'>{this.props.mainLink.publisher.name}</a>
  }

  renderOtherLinks () {
    let otherString = 'other'
    if (this.props.otherLinks.length > 1) otherString = 'others'
    return <a href='#'>{this.props.otherLinks.length} {otherString}</a>
  }

  renderPublisherIcon () {
    return <PublisherIcon source='storyInfo' publisher={this.props.mainLink.publisher} />
  }

  render () {
    return (
      <div className={styles.text}>From&nbsp;{this.renderPublisherIcon()}&nbsp;{this.renderPublishers()}</div>
    )
  }
}

StoryMetadata.propTypes = {
  mainLink: PropTypes.object.isRequired,
  otherLinks: PropTypes.array
}

export default StoryMetadata
