import React, { Component, PropTypes } from 'react'
import StoryLinkContainer from '../../containers/StoryLinkContainer'
import styles from './style.css'

class StoryLinksModal extends Component {
  render () {
    if (this.props.data.loading) {
      return (
        <div className={styles.container}>
          loading....
        </div>
      )
    }
    return (
      <div className={styles.container}>
        { this.renderMainLink() }
        { this.renderOtherLinks() }
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
  data: PropTypes.object.isRequired
}

export default StoryLinksModal
