import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import withQuery from './TimelineContainer.gql'
import StoryList from '../components/StoryList'
import Placeholder from '../components/Placeholder'
import { UIActions } from '../actions/index'
import injectSettings from '../config/injectSettings'

class TimelineContainer extends Component {
  constructor () {
    super()
    this.handleStoryLinks = this.handleStoryLinks.bind(this)
  }
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
        handleStoryLinks={this.handleStoryLinks}
      />
    )
  }

  handleStoryLinks (modalType, content) {
    let {dispatch} = this.props
    dispatch(UIActions.openModal(modalType, content))
  }
}

TimelineContainer.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.shape({
    renderCategory: PropTypes.bool
  }),
  queryVariables: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
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
const TimelineWithSettings = injectSettings(TimelineContainerWithQuery)
export default connect()(TimelineWithSettings)
