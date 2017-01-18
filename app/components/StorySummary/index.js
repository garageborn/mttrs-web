import React, { PropTypes } from 'react'
import styles from './styles.css'

const StorySummary = ({story}) => {
  return (
    <div className={styles.container}>
      <div className={styles.triangleContainer}>
        <div className={styles.outerTriangle} />
        <div className={styles.innerTriangle} />
      </div>
      <div className={styles.box}>
        <div className={styles.headlineContainer}>
          👔
        <span className={styles.headline}>{story.headline.toUpperCase()}</span>
        </div>
        <div className={styles.text}>{story.summary}</div>
        <div className={styles.footer}>
          <div className={styles.gradient} />
          <div className={styles.button}>
            <div className={styles.buttonText}>show more</div>
            <div className={styles.showMoreTriangle} />
          </div>
        </div>
      </div>
    </div>
  )
}

StorySummary.propTypes = {
  story: PropTypes.object.isRequired
}

export default StorySummary
