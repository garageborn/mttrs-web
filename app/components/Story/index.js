import React, { Component, PropTypes } from 'react'
import className from 'classnames'
import StoryImage from '../StoryImage'
import StoryContent from '../StoryContent'
import StoryCategory from '../StoryCategory'
import StoryMetadata from '../StoryMetadata'
import styles from './styles.css'

class Story extends Component {
  render () {
    const {story, handleVisitedStory, handleStoryLinks, isVisited} = this.props

    return (
      <div key={story.id} className={this.storyContainerClass()}>
        {this.renderCategory()}
        <div className={styles.story}>
          <StoryImage story={story} handleVisitedStory={handleVisitedStory} />
          <StoryContent
            story={story}
            mainLink={this.mainLink}
            otherLinks={this.otherLinks}
            totalSocial={story.total_social}
            handleStoryLinks={handleStoryLinks}
            handleVisitedStory={handleVisitedStory}
            isVisited={isVisited}
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

  storyContainerClass () {
    return className({
      [styles.container]: true,
      [styles.read]: this.props.isVisited
    })
  }

  renderCategory () {
    if (this.props.options.renderCategory === false) return
    return <StoryCategory category={this.category} />
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
