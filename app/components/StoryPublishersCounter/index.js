import React, { PropTypes } from 'react'
import styles from './styles.css'
import image from './assets/image.svg'

const StoryPublishersCounter = ({ count }) => {
  if (count <= 0) {
    return (
      <div className={styles.container}>
        <img src={image} />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.text}>+{count}</span>
      </div>
    </div>
  )
}

StoryPublishersCounter.propTypes = {
  count: PropTypes.number.isRequired
}

export default StoryPublishersCounter
