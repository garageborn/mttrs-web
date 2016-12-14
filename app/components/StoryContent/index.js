import React, { PropTypes } from 'react'
import StoryTitle from '../StoryTitle'
import StoryMetadata from '../StoryMetadata'

const StoryContent = ({mainLink, otherLinks, totalSocial}) => {
  return (
    <div className='story-text'>
      <StoryTitle mainLink={mainLink} />
      <StoryMetadata mainLink={mainLink} otherLinks={otherLinks} totalSocial={totalSocial} />
    </div>
  )
}

StoryContent.propTypes = {
  mainLink: PropTypes.object.isRequired,
  otherLinks: PropTypes.array,
  totalSocial: PropTypes.number
}

export default StoryContent
