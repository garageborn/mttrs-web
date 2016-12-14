import React from 'react'
import StoryTitle from './StoryTitle'
import StoryMetadata from './StoryMetadata'

const StoryContent = ({mainLink, otherLinks, totalSocial}) => {
  return (
    <div className='story-text'>
      <StoryTitle mainLink={mainLink} />
      <StoryMetadata mainLink={mainLink} otherLinks={otherLinks} totalSocial={totalSocial} />
    </div>
  )
}

export default StoryContent
