import React, {Component, PropTypes} from 'react'
import withQuery from './TimelineContainer.gql'
import StoryList from '../components/StoryList'
import Placeholder from '../components/Placeholder'
import injectSettings from '../config/injectSettings'

class TimelineContainer extends Component {
  render () {
    const { data } = this.props
    if (data.loading) return <Placeholder />

    return (
      <main>
        {data.timeline.map((item) => this.renderStoryList(item))}
      </main>
    )
  }

  renderStoryList (item) {
    const {options} = this.props
    if (!item.stories.length) return
    return (
      <StoryList
        key={item.date}
        date={item.date}
        stories={item.stories}
        options={options}
      />
    )
  }
}

TimelineContainer.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.shape({
    renderCategory: PropTypes.bool
  }),
  queryVariables: PropTypes.object,
  settings: PropTypes.shape({
    timezone: PropTypes.string.isRequired
  }).isRequired
}

TimelineContainer.defaultProps = {
  options: {
    renderCategory: true
  },
  queryVariables: {}
}

const TimelineContainerWithQuery = withQuery(TimelineContainer)
export default injectSettings(TimelineContainerWithQuery)
