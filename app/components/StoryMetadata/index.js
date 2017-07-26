import React, { PropTypes } from 'react'
import classNames from 'classnames'
import StoryPublishers from '../StoryPublishers'
import SocialCount from '../SocialCount'
import styles from './styles.css'

const StoryMetadata = ({ story, mainLink, otherLinksCount, totalSocial, handleStoryLinks }) => {
  let containerStyles = classNames({
    [styles.container]: true
  })

  return (
    <div className={containerStyles}>
      <StoryPublishers handleStoryLinks={handleStoryLinks} story={story} />
      <SocialCount
        story={story}
        handleStoryLinks={handleStoryLinks}
        totalSocial={totalSocial}
      />
    </div>
  )
}

StoryMetadata.propTypes = {
  story: PropTypes.object.isRequired,
  mainLink: PropTypes.object.isRequired,
  totalSocial: PropTypes.number.isRequired,
  handleStoryLinks: PropTypes.func.isRequired
}

export default StoryMetadata
