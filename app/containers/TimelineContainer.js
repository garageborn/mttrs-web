import React, {Component, PropTypes} from 'react'
import Waypoint from 'react-waypoint'
import withQuery from './TimelineContainer.gql'
import StoryList from '../components/StoryList'
import Spinner from 'react-spinner'
import Placeholder from '../components/Placeholder'
import injectSettings from '../config/injectSettings'

class TimelineContainer extends Component {
  constructor () {
    super()
    // this.loadMoreDays = this.loadMoreDays.bind(this)
    this.state = {
      loading: false
    }
  }
  render () {
    const { data } = this.props
    if (data.loading) return <Placeholder />

    return (
      <main>
        {data.timeline.map((item) => this.renderStoryList(item))}
        {this.renderInfiniteScrollWaypoint()}
      </main>
    )
  }

  loadMoreDays () {
    this.setState({loading: true})
    return this.props.data.infiniteScroll().then((data) => this.setState({loading: false}))
  }

  renderInfiniteScrollWaypoint () {
    if (this.state.loading) return <Spinner />
    return <Waypoint onEnter={this.loadMoreDays.bind(this)}/>
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
