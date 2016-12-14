import React, {Component, PropTypes} from 'react'
import Story from '../components/Story'
import StoryListHeader from '../components/StoryListHeader'

 const StoryListContainer = ({date, stories}) => {
  return (
    <div>
      <StoryListHeader date={date} />
      {stories.map((story) => <Story key={story.id} story={story} />)}
    </div>
  )
}

StoryListContainer.propTypes = {
  stories: PropTypes.array.isRequired,
  date: PropTypes.any.isRequired
}

export default StoryListContainer