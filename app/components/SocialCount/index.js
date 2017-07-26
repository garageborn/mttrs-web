/* eslint-disable react/jsx-no-bind */
import React, { PropTypes } from 'react'
import SocialCount from '../../utils/SocialCount'
import styles from './styles.css'

const StorySocialCount = ({story, totalSocial, handleStoryLinks}) => {
  let count = SocialCount(totalSocial)
  let socialCountAlt = `Social Count: ${count}`

  let handleStoryLinksModal = () => {
    return handleStoryLinks(story)
  }

  return (
    <div className={styles.container} onClick={() => handleStoryLinksModal()}>
      <img
        className={styles.icon}
        src={require('./assets/image.png')}
        alt={socialCountAlt}
      />&nbsp;
      <span className={styles.text}>{count} shares</span>
    </div>
  )
}

StorySocialCount.propTypes = {
  story: PropTypes.object,
  handleStoryLinks: PropTypes.func,
  totalSocial: PropTypes.number.isRequired
}

export default StorySocialCount
