import React, {Component, PropTypes} from 'react'
import withQuery from './TimelineContainer.gql'
import StoryList from '../components/StoryList'

class TimelineContainer extends Component {
  render () {
    const {data} = this.props
    if (data.loading) return <div className='loading'>Hang on...</div>

    return (
      <main>
        {data.timeline.map((item) => this.renderStoryList(item))}
      </main>
    )
  }

  renderStoryList (item) {
    const {options} = this.props
    if (!item.stories.length) return
    return <StoryList key={item.date} date={item.date} stories={item.stories} options={options} />
  }
}

TimelineContainer.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.shape({
    renderCategory: PropTypes.bool
  }),
  queryVariables: PropTypes.object
}

TimelineContainer.defaultProps = {
  options: {
    renderCategory: true
  },
  queryVariables: {}
}

export default withQuery(TimelineContainer)
