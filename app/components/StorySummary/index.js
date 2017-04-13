import React, { PropTypes } from 'react'
import Headline from './components/Headline'
import Logo from './components/Logo'
import Summary from './components/Summary'
import styles from './styles.css'

const charsTreshold = 200

const StorySummary = ({ story, isVisited }) => (
  <div className={styles.container}>
    <div className={styles.box}>
      <div className={styles.headlineContainer}>
        <Logo isVisited={isVisited} />
        <Headline isVisited={isVisited} headline={story.headline} />
      </div>
      <Summary isVisited={isVisited}>{story.summary}</Summary>
    </div>
  </div>
)

StorySummary.propTypes = {
  story: PropTypes.object.isRequired,
  isVisited: PropTypes.bool.isRequired
}

export default StorySummary
