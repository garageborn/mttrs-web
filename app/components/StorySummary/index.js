import React, { PropTypes } from 'react'
import styles from './styles.css'

const StorySummary = ({story}) => {
  return (
    <h3>
      {story.headline}
      {story.summary}
    </h3>
  )
}

StorySummary.propTypes = {
  story: PropTypes.object.isRequired,
}

export default StorySummary
