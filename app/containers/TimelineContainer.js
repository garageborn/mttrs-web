import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import withQuery from './TimelineContainer.gql'
import TagsContainer from './TagsContainer'
import Timeline from '../components/Timeline'
import Placeholder from '../components/Placeholder'
import Spinner from '../components/Spinner'
import injectSettings from '../config/injectSettings'
import StoryLinksModalContainer from './StoryLinksModalContainer'
import { UIActions } from '../actions/index'

const infiniteScrollThreshold = 320

class TimelineContainer extends Component {
  constructor () {
    super()
    this.handleScroll = this.handleScroll.bind(this)
    this.handleStoryLinks = this.handleStoryLinks.bind(this)

    this.state = { loadingMore: false }
  }

  componentDidMount () {
    if (!window) return
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    if (!window) return
    window.removeEventListener('scroll', this.handleScroll)
  }

  render () {
    const { data, type } = this.props
    if (data.loading) return <Placeholder pageType={type} />

    return (
      <main ref={'timelineContainer'}>
        {this.renderTags()}
        {this.renderTimeline()}
        {this.renderSpinner()}
      </main>
    )
  }

  renderTimeline () {
    return (
      <Timeline
        data={this.props.data}
        options={this.props.options}
        type={this.props.type}
        handleStoryLinks={this.handleStoryLinks}
      />
    )
  }

  renderSpinner () {
    if (!this.state.loadingMore) return
    return <Spinner />
  }

  renderTags () {
    const { queryVariables, type } = this.props
    if (type !== 'category') return null
    return (
      <TagsContainer slug={queryVariables.categorySlug} />
    )
  }

  handleScroll () {
    if (this.state.loadingMore) return
    if (!window || !this.timelineContainer) return

    const scrollPosition = window.scrollY + window.innerHeight
    const timelineHeight = this.timelineContainer.clientHeight
    const triggerPosition = timelineHeight - infiniteScrollThreshold

    if (scrollPosition > triggerPosition) this.infiniteScroll()
  }

  handleStoryLinks (story) {
    const { dispatch, data } = this.props
    const modal = (
      <StoryLinksModalContainer
        story={story}
        publisherSlug={data.variables.publisherSlug}
      />
    )
    dispatch(UIActions.openModal('storyLinks', modal))
  }

  infiniteScroll () {
    const { hasMore, infiniteScroll } = this.props.data

    if (this.state.loadingMore || !hasMore) return
    this.setState({ loadingMore: true })
    return infiniteScroll().then(() => this.setState({ loadingMore: false }))
  }

  get timelineContainer () {
    return this.refs.timelineContainer
  }
}

TimelineContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  type: PropTypes.string,
  data: PropTypes.object.isRequired,
  options: PropTypes.shape({
    renderCategory: PropTypes.bool
  }),
  queryVariables: PropTypes.shape({
    categorySlug: PropTypes.string
  }).isRequired
}

TimelineContainer.defaultProps = {
  options: {
    renderCategory: true
  },
  queryVariables: {}
}

const TimelineWithRedux = connect()(TimelineContainer)
const TimelineContainerWithQuery = withQuery(TimelineWithRedux)
export default injectSettings(TimelineContainerWithQuery)
