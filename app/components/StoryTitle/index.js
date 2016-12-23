import React, { PropTypes } from 'react'
import styles from './styles.css'

const StoryTitle = ({mainLink, handleVisitedStory}) => {
  return (
    <a href={mainLink.url} onClick={handleVisitedStory} target='_blank'>
      <h3 className={styles.title}>
        {mainLink.title}
      </h3>
    </a>
  )
}

StoryTitle.propTypes = {
  mainLink: PropTypes.object.isRequired,
  handleVisitedStory: PropTypes.func.isRequired
}

export default StoryTitle
