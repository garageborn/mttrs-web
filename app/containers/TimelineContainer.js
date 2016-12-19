import React, {Component, PropTypes} from 'react'
import withQuery from './TimelineContainer.gql'
import StoryList from '../components/StoryList'
import { UIActions } from '../actions/index'

class TimelineContainer extends Component {
  constructor () {
    super()
    this.handleStoryLinks = this.handleStoryLinks.bind(this)
  }
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
  handleStoryLinks () {
    let {dispatch} = this.props
    dispatch(UIActions.openModal())
  }
}

TimelineContainer.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.shape({
    renderCategory: PropTypes.bool
  }),
  queryVariables: PropTypes.object,
  dispatch: PropTypes.func.isRequired
}

TimelineContainer.defaultProps = {
  options: {
    renderCategory: true
  },
  queryVariables: {}
}

export default withQuery(TimelineContainer)
