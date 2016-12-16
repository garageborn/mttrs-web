import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import StoryListContainer from './StoryListContainer'
import withQuery from './TimelineContainer.gql'

class TimelineContainer extends Component {
  render () {
    const {data, routing} = this.props
    if (data.loading) return <div className='loading'>Hang on...</div>
    let locationBeforeTransitions = routing.locationBeforeTransitions || { pathname: '' }
    return (
      <main>
        {data.timeline.map((item) =>
          <StoryListContainer key={item.date} date={item.date} stories={item.stories} routing={locationBeforeTransitions} />
        )}
      </main>
    )
  }
}

TimelineContainer.propTypes = {
  data: PropTypes.object.isRequired,
  routing: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
  return {
    routing: state.routing
  }
}
const TimelineContainerWithQuery = withQuery(TimelineContainer)
export default connect(mapStateToProps)(TimelineContainerWithQuery)
