import React, { Component, PropTypes } from 'react'
import StoryInfo from '../StoryInfo'
import SocialCount from '../SocialCount'
import styles from './styles.css'

class StoryMetadata extends Component {
  render () {
    let {story, mainLink, otherLinksCount, totalSocial, handleStoryLinks} = this.props

    return (
      <div className={styles.container}>
        <StoryInfo
          story={story}
          mainLink={mainLink}
          otherLinksCount={otherLinksCount}
          handleStoryLinks={handleStoryLinks}
        />
        <SocialCount totalSocial={totalSocial} />
      </div>
    )
  }
}

StoryMetadata.propTypes = {
  story: PropTypes.object.isRequired,
  mainLink: PropTypes.object.isRequired,
  otherLinksCount: PropTypes.number.isRequired,
  totalSocial: PropTypes.number.isRequired,
  handleStoryLinks: PropTypes.func.isRequired
}

export default StoryMetadata
