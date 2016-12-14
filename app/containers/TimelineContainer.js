import React, {Component, PropTypes} from 'react'
import StoryListContainer from './StoryListContainer'
import graphql from './TimelineContainer.gql'

const TimelineContainer = props => {
  if (props.data.loading) return <div className='loading'>Hang on...</div>
  return (
    <main>
      {props.data.timeline.map((item) => <StoryListContainer key={item.date} date={item.date} stories={item.stories} />)}
    </main>
  )
}

TimelineContainer.propTypes = {
  data: PropTypes.object.isRequired
}

export default graphql(TimelineContainer)
