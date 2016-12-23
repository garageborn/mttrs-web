/* eslint-disable react/jsx-no-bind */
import React, { PropTypes } from 'react'
import styles from './styles.css'

const StoryTitle = ({story, mainLink, handleVisitedStory}) => {
  return (
    <a href={mainLink.url} onClick={() => handleVisitedStory(story)} target='_blank'>
      <h3 className={styles.title}>
        {mainLink.title}
      </h3>
    </a>
  )
}

StoryTitle.propTypes = {
  story: PropTypes.object.isRequired,
  mainLink: PropTypes.object.isRequired,
  handleVisitedStory: PropTypes.func.isRequired
}

export default StoryTitle
