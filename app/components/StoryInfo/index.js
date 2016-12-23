import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { injectIntl, defineMessages } from 'react-intl'
import _capitalize from 'lodash/capitalize'
import PublisherIcon from '../PublisherIcon'
import StoryLinksModal from '../StoryLinksModal'
import styles from './styles.css'

const messages = defineMessages({
  from: {
    id: 'from',
    defaultMessage: 'From'
  },

  and: {
    id: 'and',
    defaultMessage: 'and'
  },

  other: {
    id: 'other',
    defaultMessage: 'other'
  },

  others: {
    id: 'others',
    defaultMessage: 'others'
  }
})

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
    const { formatMessage } = this.props.intl
    return <p>{this.renderMainPublisherName()} {formatMessage(messages.and)} {this.renderOtherLinks()}</p>
  }

  renderMainPublisherName () {
    return <Link to={this.props.mainLink.publisher.slug}>{this.props.mainLink.publisher.name}</Link>
  }

  renderOtherLinks () {
    const { formatMessage } = this.props.intl
    let otherString = formatMessage(messages.other)
    if (this.props.otherLinks.length > 1) otherString = formatMessage(messages.others)
    return <a onClick={this.handleStoryLinks}>{this.props.otherLinks.length} {otherString}</a>
  }

  renderPublisherIcon () {
    return <PublisherIcon size='small' publisher={this.props.mainLink.publisher} />
  }

  handleStoryLinks () {
    const { handleStoryLinks } = this.props
    handleStoryLinks(
      'storyLinks',
      <StoryLinksModal
        mainLink={this.props.mainLink}
        otherLinks={this.props.otherLinks}
      />
    )
  }

  render () {
    const { formatMessage } = this.props.intl
    let from = formatMessage(messages.from)
    return (
      <div className={styles.text}>{_capitalize(from)}&nbsp;{this.renderPublisherIcon()}&nbsp;{this.renderPublishers()}</div>
    )
  }
}

StoryInfo.propTypes = {
  mainLink: PropTypes.object.isRequired,
  otherLinks: PropTypes.array,
  handleStoryLinks: PropTypes.func.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(StoryInfo)
