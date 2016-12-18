import React, { PropTypes } from 'react'
import StoryTitle from '../StoryTitle'
import StoryMetadata from '../StoryMetadata'
import styles from './styles.css'

const StoryContent = ({mainLink, otherLinks, totalSocial}) => {
  return (
    <div className={styles.container}>
      <StoryTitle mainLink={mainLink} />
      <StoryMetadata
        source='storyContent'
        mainLink={mainLink}
        otherLinks={otherLinks}
        totalSocial={totalSocial}
      />
    </div>
  )
}

StoryContent.propTypes = {
  mainLink: PropTypes.object.isRequired,
  otherLinks: PropTypes.array,
  totalSocial: PropTypes.number
}

export default StoryContent
