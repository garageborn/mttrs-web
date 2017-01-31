import React, { PropTypes } from 'react'
import StoryTitle from '../StoryTitle'
import StoryCategory from '../StoryCategory'
import styles from './styles.css'

const StoryContent = ({
  mainLink,
  shouldRenderCategory,
  category
}) => {
  const renderCategory = () => {
    if (shouldRenderCategory === false) return
    return <StoryCategory category={category} />
  }
  return (
    <div className={styles.container}>
      <StoryTitle mainLink={mainLink} />
      {renderCategory()}
    </div>
  )
}

StoryContent.propTypes = {
  mainLink: PropTypes.object.isRequired,
  shouldRenderCategory: PropTypes.bool.isRequired,
  category: PropTypes.object.isRequired
}

export default StoryContent
