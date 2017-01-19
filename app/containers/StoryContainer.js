import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Story from '../components/Story'
import StorySummary from '../components/StorySummary'
import { UIActions, StorageActions } from '../actions/index'

class StoryContainer extends Component {
  constructor () {
    super()
    this.handleStoryLinks = this.handleStoryLinks.bind(this)
    this.handleVisitedStory = this.handleVisitedStory.bind(this)
  }

  componentWillMount () {
    this.props.dispatch(StorageActions.getVisitedStories())
  }

  render () {
    const {story, options, isVisited} = this.props
    return (
      <div>
        <Story
          story={story}
          options={options}
          isVisited={isVisited}
          handleStoryLinks={this.handleStoryLinks}
          handleVisitedStory={this.handleVisitedStory}
        />
        {this.renderResume(story)}
      </div>
    )
  }

  handleStoryLinks (modalType, content) {
    this.props.dispatch(UIActions.openModal(modalType, content))
  }

  handleVisitedStory () {
    const {dispatch, story} = this.props
    dispatch(StorageActions.addVisitedStory(story))
  }

  renderResume (story) {
    if (!story.summary) return
    return (
      <StorySummary story={story} />
    )
  }
}

StoryContainer.propTypes = {
  story: PropTypes.object.isRequired,
  options: PropTypes.shape({
    renderCategory: PropTypes.bool
  }),
  dispatch: PropTypes.func.isRequired,
  isVisited: PropTypes.bool.isRequired
}

StoryContainer.defaultProps = {
  isVisited: false,
  options: {
    renderCategory: true
  }
}

let mapStateToProps = (state, ownProps) => {
  let visitedStories = state.StorageReducer.visitedStories.items
  let storyId = parseInt(ownProps.story.id)

  return {
    isVisited: visitedStories.indexOf(storyId) !== -1
  }
}

export default connect(mapStateToProps)(StoryContainer)
