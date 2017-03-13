/* eslint-disable react/jsx-no-bind */
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { injectIntl, defineMessages } from 'react-intl'
import _capitalize from 'lodash/capitalize'
import PublisherIcon from '../PublisherIcon'
import styles from './styles.css'

const messages = defineMessages({
  from: { id: 'from' },
  and: { id: 'and' },
  other: { id: 'other' },
  others: { id: 'others' }
})

class StoryInfo extends Component {
  renderPublishers () {
    if (this.props.otherLinksCount === 0) return this.renderMainPublisherName()
    return this.renderPublishersText()
  }

  renderPublishersText () {
    const { formatMessage } = this.props.intl
    return (
      <div className={styles.content}>{this.renderMainPublisherName()}&nbsp;{formatMessage(messages.and)}&nbsp;{this.renderOtherLinks()}</div>
    )
  }

  renderMainPublisherName () {
    return (
      <Link className={styles.link} to={this.props.mainLink.publisher.slug}>
        {this.renderPublisherIcon()}&nbsp;
        <span className={styles.publisherName}>
          {this.props.mainLink.publisher.name}
        </span>
      </Link>
    )
  }

  renderOtherLinks () {
    const { story, otherLinksCount, intl, handleStoryLinks } = this.props
    let otherString = intl.formatMessage(messages.other)
    if (otherLinksCount > 1) otherString = intl.formatMessage(messages.others)
    return (
      <span className={styles.otherLinks} onClick={() => handleStoryLinks(story)}>
        {otherLinksCount} {otherString}
      </span>
    )
  }

  renderPublisherIcon () {
    return <PublisherIcon size='small' publisher={this.props.mainLink.publisher} />
  }

  render () {
    const { formatMessage } = this.props.intl
    let from = formatMessage(messages.from)

    return (
      <div className={styles.container}>
        {_capitalize(from)}&nbsp;{this.renderPublishers()}
      </div>
    )
  }
}

StoryInfo.propTypes = {
  handleStoryLinks: PropTypes.func.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  mainLink: PropTypes.object.isRequired,
  otherLinksCount: PropTypes.number.isRequired,
  story: PropTypes.object.isRequired
}

export default injectIntl(StoryInfo)
