/* eslint-disable react/jsx-no-bind */
import React, { PropTypes } from 'react'
import SocialCount from '../../utils/SocialCount'
import styles from './styles.css'

const StorySocialCount = ({story, otherLinksCount, totalSocial, handleStoryLinks}) => {
  let count = SocialCount(totalSocial)
  let socialCountAlt = `Social Count: ${count}`

  let handleStoryLinksModal = () => {
    return handleStoryLinks(story)
  }

  return (
    <div onClick={() => handleStoryLinksModal()}>
      <img
        className={styles.icon}
        src={require('../../assets/icon-social-count.png')}
        alt={socialCountAlt}
      />&nbsp;
      <span className={styles.text}>{count}</span>
    </div>
  )
}

StorySocialCount.propTypes = {
  story: PropTypes.object.isRequired,
  otherLinksCount: PropTypes.number.isRequired,
  handleStoryLinks: PropTypes.func.isRequired,
  totalSocial: PropTypes.number.isRequired
}

export default StorySocialCount
