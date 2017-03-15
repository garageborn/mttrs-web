import React, { Component, PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import StoryLinkContainer from '../../containers/StoryLinkContainer'
import styles from './style.css'

const messages = defineMessages({
  loading: { id: 'spinner.loading' }
})

class StoryLinksModal extends Component {
  render () {
    if (this.props.data.loading) {
      return (
        <div className={styles.container}>
          {this.props.intl.formatMessage(messages.loading)}
        </div>
      )
    }

    return (
      <div className={styles.container}>
        <section className={styles.content}>
          {this.renderMainLink()}
          {this.renderOtherLinks()}
        </section>
      </div>
    )
  }

  renderMainLink () {
    const { story } = this.props.data
    const mainLink = story.main_link
    return <StoryLinkContainer story={story} key={mainLink.id} type='main' storyLink={mainLink} />
  }

  renderOtherLinks () {
    const { story } = this.props.data
    return story.other_links.map((storyLink) =>
      <StoryLinkContainer story={story} key={storyLink.id} type='other' storyLink={storyLink} />
    )
  }
}

StoryLinksModal.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  data: PropTypes.object.isRequired
}

export default injectIntl(StoryLinksModal)
