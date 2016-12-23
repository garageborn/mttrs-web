import React, {Component, PropTypes} from 'react'
import Story from '../Story'
import StoryListHeader from '../StoryListHeader'
import styles from './styles.css'

class StoryListContainer extends Component {

  render () {
    const {date, stories} = this.props

    return (
      <div className={styles.container}>
        <StoryListHeader date={date} />
        {stories.map((story) => this.renderStory(story))}
      </div>
    )
  }

  renderStory (story) {
    const {handleStoryLinks, handleVisitedStory, options, visitedStories} = this.props
    return (
      <Story
        key={story.id}
        story={story}
        options={options}
        handleStoryLinks={handleStoryLinks}
        handleVisitedStory={handleVisitedStory}
        visitedStories={visitedStories}
      />
    )
  }
}

StoryListContainer.propTypes = {
  stories: PropTypes.array.isRequired,
  date: PropTypes.any.isRequired,
  options: PropTypes.shape({
    renderCategory: PropTypes.bool
  }),
  handleStoryLinks: PropTypes.func.isRequired,
  handleVisitedStory: PropTypes.func.isRequired,
  visitedStories: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired
  }).isRequired
}

StoryListContainer.defaultProps = {
  options: {
    renderCategory: true
  }
}

export default StoryListContainer
