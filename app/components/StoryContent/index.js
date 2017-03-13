import React, { PropTypes } from 'react'
import StoryTitle from '../StoryTitle'
import StoryCategory from '../StoryCategory'
import styles from './styles.css'

const StoryContent = ({
  mainLink,
  shouldRenderCategory,
  category,
  handleMouseOver,
  active
}) => {
  const renderCategory = () => {
    if (shouldRenderCategory === false) return
    return <StoryCategory category={category} />
  }
  return (
    <div className={styles.container}>
      <StoryTitle
        handleMouseOver={handleMouseOver}
        mainLink={mainLink}
        active={active}
      />
      {renderCategory()}
    </div>
  )
}

StoryContent.propTypes = {
  mainLink: PropTypes.object.isRequired,
  shouldRenderCategory: PropTypes.bool.isRequired,
  category: PropTypes.object.isRequired,
  handleMouseOver: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

export default StoryContent
