import React, {Component, PropTypes} from 'react'
import StoryImage from '../StoryImage'
import StoryContent from '../StoryContent'
import StoryCategory from '../StoryCategory'
import styles from './styles.css'
import StoryMetadata from '../StoryMetadata'

class Story extends Component {
  render () {
    const {story, handleVisitedStory, handleStoryLinks} = this.props

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
            handleStoryLinks={handleStoryLinks}
            handleVisitedStory={handleVisitedStory}
          />
        </div>
        <StoryMetadata
          source='story'
          mainLink={this.mainLink}
          otherLinks={this.otherLinks}
          totalSocial={story.total_social}
          handleStoryLinks={handleStoryLinks}
        />
      </div>
    )
  }

  renderCategory () {
    if (this.props.options.renderCategory === false) return
    return <StoryCategory category={this.category} />
  }

  renderVisited () {
    if (!this.props.isVisited) return
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
}

Story.propTypes = {
  story: PropTypes.object.isRequired,
  options: PropTypes.shape({
    renderCategory: PropTypes.bool
  }),
  handleStoryLinks: PropTypes.func.isRequired,
  handleVisitedStory: PropTypes.func.isRequired,
  isVisited: PropTypes.bool.isRequired
}

Story.defaultProps = {
  isVisited: false,
  options: {
    renderCategory: true
  }
}

export default Story
