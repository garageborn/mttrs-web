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
    return <p>{this.renderMainPublisherName()} {formatMessage(messages.and)} {this.renderOtherLinks()}</p>
  }

  renderMainPublisherName () {
    return <Link to={this.props.mainLink.publisher.slug}>{this.props.mainLink.publisher.name}</Link>
  }

  renderOtherLinks () {
    const { story, otherLinksCount, intl, handleStoryLinks } = this.props
    let otherString = intl.formatMessage(messages.other)
    if (otherLinksCount > 1) otherString = intl.formatMessage(messages.others)
    return (
      <a onClick={() => handleStoryLinks(story)}>
        {otherLinksCount} {otherString}
      </a>
    )
  }

  renderPublisherIcon () {
    return <PublisherIcon size='small' publisher={this.props.mainLink.publisher} />
  }

  render () {
    const { formatMessage } = this.props.intl
    let from = formatMessage(messages.from)
    return (
      <div className={styles.text}>
        {_capitalize(from)}&nbsp;{this.renderPublisherIcon()}&nbsp;{this.renderPublishers()}
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
