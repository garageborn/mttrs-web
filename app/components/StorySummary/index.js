import React, { PropTypes } from 'react'
import Headline from './components/Headline'
import Logo from './components/Logo'
import Summary from './components/Summary'
import styles from './styles.css'

const StorySummary = ({ story }) => (
  <div className={styles.container}>
    <div className={styles.box}>
      <div className={styles.headlineContainer}>
        <Logo />
        <Headline headline={story.headline} />
      </div>
      <Summary>{story.summary}</Summary>
    </div>
  </div>
)

StorySummary.propTypes = {
  story: PropTypes.object.isRequired
}

export default StorySummary
