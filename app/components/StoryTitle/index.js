import React, { PropTypes } from 'react'
import styles from './styles.css'

const StoryTitle = ({mainLink}) => {
  return <h1 className={styles.title}>{mainLink.title}</h1>
}

StoryTitle.propTypes = {
  mainLink: PropTypes.object.isRequired
}

export default StoryTitle
