import React, { Component, PropTypes } from 'react'
import StoryInfo from '../StoryInfo'
import SocialCount from '../SocialCount'

const StoryMetadata = ({mainLink, otherLinks, totalSocial}) => {
  return (
    <div>
      <SocialCount totalSocial={totalSocial} />
      <StoryInfo mainLink={mainLink} otherLinks={otherLinks} />
    </div>
  )
}

StoryMetadata.propTypes = {
  mainLink: PropTypes.object.isRequired,
  otherLinks: PropTypes.array,
  totalSocial: PropTypes.number.isRequired,
}

export default StoryMetadata
