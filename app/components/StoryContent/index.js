import React, { PropTypes } from 'react'
import StoryTitle from '../StoryTitle'
import styles from './styles.css'
import StoryCategory from '../StoryCategory'

const StoryContent = ({
  story,
  mainLink,
  otherLinks,
  totalSocial,
  handleStoryLinks,
  handleVisitedStory,
  shouldRenderCategory,
  category
}) => {
  const renderCategory = () => {
    if (shouldRenderCategory === false) return
    return <StoryCategory category={category} />
  }
  return (
    <div className={styles.container}>
      <StoryTitle mainLink={mainLink} handleVisitedStory={handleVisitedStory} />
      {renderCategory()}
    </div>
  )
}

StoryContent.propTypes = {
  story: PropTypes.object.isRequired,
  mainLink: PropTypes.object.isRequired,
  otherLinks: PropTypes.array,
  totalSocial: PropTypes.number,
  handleStoryLinks: PropTypes.func.isRequired,
  handleVisitedStory: PropTypes.func.isRequired,
  shouldRenderCategory: PropTypes.bool.isRequired,
  category: PropTypes.object.isRequired
}

export default StoryContent
