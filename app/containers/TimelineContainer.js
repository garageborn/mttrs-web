import React, {Component, PropTypes} from 'react'
import StoryListContainer from './StoryListContainer'
import withQuery from './TimelineContainer.gql'

const TimelineContainer = props => {
  if (props.data.loading) return <div className='loading'>Hang on...</div>
  return (
    <main>
      {props.data.timeline.map((item) =>
        <StoryListContainer key={item.date} date={item.date} stories={item.stories} />
      )}
    </main>
  )
}

TimelineContainer.propTypes = {
  data: PropTypes.object.isRequired,
  section: PropTypes.shape({
    name: PropTypes.string.isRequired,
    model: PropTypes.object.isRequired
  })
}

export default withQuery(TimelineContainer)
