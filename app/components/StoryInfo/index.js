/* eslint-disable react/jsx-no-bind */
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { injectIntl, defineMessages } from 'react-intl'
import RestrictContentLabel from '../RestrictContentLabel'
import PublisherIcon from '../PublisherIcon'
import styles from './styles.css'

const messages = defineMessages({
  and: { id: 'and' },
  others: { id: 'storyPublishers.others' }
})

class StoryInfo extends Component {
  renderRestrictContentLabel () {
    const { publisher } = this.props.mainLink
    if (publisher.restrict_content) return <RestrictContentLabel />
  }

  renderPublisherName () {
    return (
      <div className={styles.restrictContent}>
        {this.renderMainPublisherName()}
        {this.renderRestrictContentLabel()}
      </div>
    )
  }

  renderPublishers () {
    if (this.props.otherLinksCount === 0) return this.renderPublisherName()
    return this.renderPublishersText()
  }

  renderPublishersText () {
    const { formatMessage } = this.props.intl
    return (
      <div className={styles.content}>
        {this.renderMainPublisherName()}&nbsp;{formatMessage(messages.and)}&nbsp;{this.renderOtherLinks()}
      </div>
    )
  }

  renderMainPublisherName () {
    const { publisher } = this.props.mainLink
    return (
      <Link className={styles.link} to={publisher.slug}>
        {this.renderPublisherIcon()}&nbsp;
        <span className={styles.publisherName}>
          {publisher.display_name || publisher.name}
        </span>
      </Link>
    )
  }

  renderOtherLinks () {
    const { story, otherLinksCount, intl, handleStoryLinks } = this.props
    const othersText = intl.formatMessage(messages.others, {itemCount: otherLinksCount})

    if (!otherLinksCount) return

    return (
      <span className={styles.otherLinks} onClick={() => handleStoryLinks(story)}>
        {othersText}
      </span>
    )
  }

  renderPublisherIcon () {
    return <PublisherIcon size='small' publisher={this.props.mainLink.publisher} />
  }

  render () {
    return (
      <div className={styles.container}>
        {this.renderPublishers()}
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
