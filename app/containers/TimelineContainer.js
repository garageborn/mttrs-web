import React, {Component, PropTypes} from 'react'
import withQuery from './TimelineContainer.gql'
import StoryList from '../components/StoryList'
import Placeholder from '../components/Placeholder'
import Spinner from '../components/Spinner'
import injectSettings from '../config/injectSettings'

class TimelineContainer extends Component {
  constructor () {
    super()
    this.timelineContainerRef = this.timelineContainerRef.bind(this)
    this.state = {
      loading: false
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  render () {
    const { data } = this.props
    if (data.loading) return <Placeholder />

    return (
      <main
        ref={this.timelineContainerRef}
      >
        {data.timeline.map((item) => this.renderStoryList(item))}
        {this.renderSpinner()}
      </main>
    )
  }

  timelineContainerRef (c) {
    const ref = this.timelineContainer = c
    return ref
  }

  renderSpinner () {
    if (!this.state.loading) return
    return <Spinner />
  }

  handleScroll () {
    const infiniteScrollThreshold = 320
    const verticalScrollAndVisibleHeight = window.scrollY + window.innerHeight
    const timelineHeight = this.timelineContainer.clientHeight
    const scrollYAndWindowHeightBiggerThanTimelineHeight = verticalScrollAndVisibleHeight > timelineHeight
    const timelineHeightDiffThreshold = scrollYAndWindowHeightBiggerThanTimelineHeight - infiniteScrollThreshold
    const isLoading = this.state.loading
    if (timelineHeightDiffThreshold && !isLoading) {
      this.setState({loading: true})
      return this.props.data.infiniteScroll().then((data) => {
        this.setState({loading: data.loading})
      })
    }
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
  })
}

TimelineContainer.defaultProps = {
  options: {
    renderCategory: true
  },
  queryVariables: {}
}

const TimelineContainerWithQuery = withQuery(TimelineContainer)
export default injectSettings(TimelineContainerWithQuery)
