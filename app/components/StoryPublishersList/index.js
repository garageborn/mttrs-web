import React, { PropTypes } from 'react'
import styles from './styles.css'

const StoryPublishersList = ({ publishers }) => {
  return (
    <div className={styles.container}>
      {publishers}
    </div>
  )
}

StoryPublishersList.propTypes = {
  publishers: PropTypes.any.isRequired
}

export default StoryPublishersList
