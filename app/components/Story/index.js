import React, {Component, PropTypes} from 'react'
import StoryImage from '../StoryImage'
import StoryContent from '../StoryContent'
import StoryCategory from '../StoryCategory'
import styles from './styles.css'
import StoryMetadata from '../StoryMetadata'

class Story extends Component {
  render () {
    const {story, handleVisitedStory} = this.props
    console.log('----render', story.id)

    return (
      <div key={story.id} className={styles.container}>
        {this.renderVisited() /* mock */}
        {this.renderCategory()}
        <div className={styles.story}>
          <StoryImage story={story} handleVisitedStory={handleVisitedStory} />
          <StoryContent
            mainLink={this.mainLink}
            otherLinks={this.otherLinks}
            totalSocial={story.total_social}
            handleStoryLinks={this.props.handleStoryLinks}
            handleVisitedStory={handleVisitedStory}
          />
        </div>
        <StoryMetadata
          source='story'
          mainLink={this.mainLink}
          otherLinks={this.otherLinks}
          totalSocial={story.total_social}
          handleStoryLinks={this.props.handleStoryLinks}
        />
      </div>
    )
  }

  renderCategory () {
    if (this.props.options.renderCategory === false) return
    return <StoryCategory category={this.category} />
  }

  renderVisited () {
    if (!this.isVisited) return
    return <span>Visited</span>
  }

  get mainLink () {
    return this.props.story.main_link
  }

  get otherLinks () {
    return this.props.story.other_links
  }

  get category () {
    return this.props.story.main_category
  }

  get isVisited () {
    const visitedStories = this.props.visitedStories.items
    return visitedStories.indexOf(this.props.story.id) !== -1
  }
}

Story.propTypes = {
  story: PropTypes.object.isRequired,
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

Story.defaultProps = {
  options: {
    renderCategory: true
  }
}

export default Story
