import React, { PropTypes } from 'react'
import Story from '../components/Story'
import StoryListHeader from '../components/StoryListHeader'

const StoryListContainer = ({date, stories, routing}) => {
  return (
    <div>
      <StoryListHeader date={date} />
      {stories.map((story) => <Story key={story.id} story={story} routing={routing} />)}
    </div>
  )
}

StoryListContainer.propTypes = {
  stories: PropTypes.array.isRequired,
  date: PropTypes.any.isRequired
}

export default StoryListContainer
