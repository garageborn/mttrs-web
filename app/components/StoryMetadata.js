import React, { Component, PropTypes } from 'react'
import StoryInfo from './StoryInfo'
import StorySocialCount from './StorySocialCount'

const StoryMetadata = ({mainLink, otherLinks, totalSocial}) => {
  return (
    <div>
      <StorySocialCount totalSocial={totalSocial} />
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
