/* eslint-disable react/jsx-no-bind */
import React, { PropTypes } from 'react'
import className from 'classnames'
import SocialCount from '../../utils/SocialCount'
import styles from './styles.css'

const StorySocialCount = ({story, otherLinksCount, totalSocial, handleStoryLinks}) => {
  let count = SocialCount(totalSocial)
  let socialCountAlt = `Social Count: ${count}`

  let handleStoryLinksModal = () => {
    if (otherLinksCount >= 1) {
      return handleStoryLinks(story)
    }
  }

  let textStyles = () => {
    return className({
      [styles.text]: true,
      [styles.cursorPointer]: otherLinksCount >= 1
    })
  }

  return (
    <p className={textStyles()} onClick={() => handleStoryLinksModal()}>
      <img className={styles.icon} src={require('../../assets/icon-social-count.png')} alt={socialCountAlt} /> {count}
    </p>
  )
}

StorySocialCount.propTypes = {
  story: PropTypes.object.isRequired,
  otherLinksCount: PropTypes.number.isRequired,
  handleStoryLinks: PropTypes.func.isRequired,
  totalSocial: PropTypes.number.isRequired
}

export default StorySocialCount
