import React, { PropTypes } from 'react'

const StoryTitle = ({mainLink}) => {
  return (
    <h3><a href={mainLink.url} target='_blank'>{mainLink.title}</a></h3>
  )
}

StoryTitle.propTypes = {
  mainLink: PropTypes.object.isRequired,
}

export default StoryTitle
