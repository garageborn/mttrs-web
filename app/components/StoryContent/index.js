import React, { PropTypes } from 'react'
import StoryTitle from '../StoryTitle'
import styles from './styles.css'

const StoryContent = ({
  story,
  mainLink,
  otherLinks,
  totalSocial,
  handleStoryLinks,
  handleVisitedStory
}) => {
  return (
    <div className={styles.container}>
      <StoryTitle mainLink={mainLink} handleVisitedStory={handleVisitedStory} />
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
