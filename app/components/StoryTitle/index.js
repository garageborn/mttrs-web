import React, { PropTypes } from 'react'
import styles from './styles.css'

const StoryTitle = ({mainLink}) => {
  return (
    <h3 className={styles.title}>
      <a href={mainLink.url} target='_blank'>{mainLink.title}</a>
    </h3>
  )
}

StoryTitle.propTypes = {
  mainLink: PropTypes.object.isRequired
}

export default StoryTitle
