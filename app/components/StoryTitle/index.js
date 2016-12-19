import React, { PropTypes } from 'react'
import styles from './styles.css'

const StoryTitle = ({mainLink}) => {
  return (
    <a href={mainLink.url} target='_blank'>
      <h3 className={styles.title}>
        {mainLink.title}
      </h3>
    </a>
  )
}

StoryTitle.propTypes = {
  mainLink: PropTypes.object.isRequired
}

export default StoryTitle
