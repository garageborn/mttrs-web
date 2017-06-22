import React, { PropTypes } from 'react'
import classNames from 'classnames'
import StoryInfo from '../StoryInfo'
import SocialCount from '../SocialCount'
import styles from './styles.css'

const StoryMetadata = ({ story, mainLink, otherLinksCount, totalSocial, handleStoryLinks }) => {
  let containerStyles = classNames({
    [styles.container]: true
  })

  return (
    <div className={containerStyles}>
      <StoryInfo
        story={story}
        mainLink={mainLink}
        otherLinksCount={otherLinksCount}
        handleStoryLinks={handleStoryLinks}
      />
      <SocialCount
        story={story}
        otherLinksCount={otherLinksCount}
        handleStoryLinks={handleStoryLinks}
        totalSocial={totalSocial}
      />
    </div>
  )
}

StoryMetadata.propTypes = {
  story: PropTypes.object.isRequired,
  mainLink: PropTypes.object.isRequired,
  otherLinksCount: PropTypes.number.isRequired,
  totalSocial: PropTypes.number.isRequired,
  handleStoryLinks: PropTypes.func.isRequired
}

export default StoryMetadata
