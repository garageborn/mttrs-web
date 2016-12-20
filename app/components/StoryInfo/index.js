import React, { Component, PropTypes } from 'react'
import PublisherIcon from '../PublisherIcon'
import StoryLinksModal from '../StoryLinksModal'
import styles from './styles.css'
import { Link } from 'react-router'

class StoryInfo extends Component {
  constructor () {
    super()
    this.handleStoryLinks = this.handleStoryLinks.bind(this)
  }
  renderPublishers () {
    if (this.props.otherLinks.length === 0) return this.renderMainPublisherName()
    return this.renderPublishersText()
  }

  renderPublishersText () {
    return <p>{this.renderMainPublisherName()} and {this.renderOtherLinks()}</p>
  }

  renderMainPublisherName () {
    return <Link to={this.props.mainLink.publisher.slug}>{this.props.mainLink.publisher.name}</Link>
  }

  renderOtherLinks () {
    let otherString = 'other'
    if (this.props.otherLinks.length > 1) otherString = 'others'
    return <a onClick={this.handleStoryLinks}>{this.props.otherLinks.length} {otherString}</a>
  }

  renderPublisherIcon () {
    return <PublisherIcon size='small' publisher={this.props.mainLink.publisher} />
  }

  handleStoryLinks () {
    this.props.handleStoryLinks('storyLinks', <StoryLinksModal mainLink={this.props.mainLink} otherLinks={this.props.otherLinks} />)
  }

  render () {
    return (
      <div className={styles.text}>From&nbsp;{this.renderPublisherIcon()}&nbsp;{this.renderPublishers()}</div>
    )
  }
}

StoryInfo.propTypes = {
  mainLink: PropTypes.object.isRequired,
  otherLinks: PropTypes.array,
  handleStoryLinks: PropTypes.func.isRequired
}

export default StoryInfo
