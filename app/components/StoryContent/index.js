import React, { PropTypes } from 'react'
import StoryTitle from '../StoryTitle'
import StoryCategory from '../StoryCategory'
import styles from './styles.css'

const StoryContent = ({ mainLink, category, handleMouseOver, active, isVisited }) => (
  <div className={styles.container}>
    <StoryTitle
      handleMouseOver={handleMouseOver}
      mainLink={mainLink}
      active={active}
      isVisited={isVisited}
    />
    <StoryCategory category={category} isVisited={isVisited} />
  </div>
)

StoryContent.propTypes = {
  mainLink: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
  handleMouseOver: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  isVisited: PropTypes.bool.isRequired
}

export default StoryContent
