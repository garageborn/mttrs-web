import React, { PropTypes } from 'react'
import StoryTitle from '../StoryTitle'
import StoryMetadata from '../StoryMetadata'
import styles from './styles.css'

const StoryContent = ({story, mainLink, otherLinks, totalSocial, handleStoryLinks, handleVisitedStory}) => {
  return (
    <div className={styles.container}>
      <StoryTitle story={story} mainLink={mainLink} handleVisitedStory={handleVisitedStory} />
      <StoryMetadata
        source='storyContent'
        mainLink={mainLink}
        otherLinks={otherLinks}
        totalSocial={totalSocial}
        handleStoryLinks={handleStoryLinks}
      />
    </div>
  )
}

StoryContent.propTypes = {
  story: PropTypes.object.isRequired,
  mainLink: PropTypes.object.isRequired,
  otherLinks: PropTypes.array,
  totalSocial: PropTypes.number,
  handleStoryLinks: PropTypes.func.isRequired,
  handleVisitedStory: PropTypes.func.isRequired
}

export default StoryContent
