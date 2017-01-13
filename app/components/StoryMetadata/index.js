import React, { Component, PropTypes } from 'react'
import StoryInfo from '../StoryInfo'
import SocialCount from '../SocialCount'
import styles from './styles.css'

class StoryMetadata extends Component {
  render () {
    let {story, mainLink, otherLinks, totalSocial, handleStoryLinks} = this.props

    return (
      <div className={styles.container}>
        <StoryInfo
          story={story}
          mainLink={mainLink}
          otherLinks={otherLinks}
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
  otherLinks: PropTypes.array.isRequired,
  totalSocial: PropTypes.number.isRequired,
  handleStoryLinks: PropTypes.func.isRequired
}

export default StoryMetadata
