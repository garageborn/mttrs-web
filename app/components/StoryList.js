import React, {Component, PropTypes} from 'react'
import StoryContainer from '../containers/StoryContainer'
import ParseDate from '../common/utils/ParseDate'

 const StoryList = ({date, stories}) => {
  return (
    <div>
      <h2>{ParseDate(date)}</h2>
      {stories.map((story) => { return <StoryContainer key={story.id} story={story} />})}
    </div>
  )
}

StoryList.propTypes = {
  stories: PropTypes.array.isRequired,
  date: PropTypes.any.isRequired
}

export default StoryList
