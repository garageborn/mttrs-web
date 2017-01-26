import React, { Component, PropTypes } from 'react'
import className from 'classnames'
import StoryImage from '../StoryImage'
import StoryContent from '../StoryContent'
import StoryMetadata from '../StoryMetadata'
import styles from './styles.css'

class Story extends Component {
  render () {
    const { story, handleVisitedStory, handleStoryLinks, options } = this.props
    return (
      <div key={story.id} className={this.storyContainerClass()}>
        <div className={styles.story}>
          <StoryImage story={story} handleVisitedStory={handleVisitedStory} />
          <StoryContent
            mainLink={this.mainLink}
            handleVisitedStory={handleVisitedStory}
            shouldRenderCategory={options.renderCategory}
            category={this.category}
          />
        </div>
        <StoryMetadata
          story={story}
          mainLink={this.mainLink}
          otherLinksCount={this.otherLinksCount}
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

  get mainLink () {
    return this.props.story.main_link
  }

  get otherLinksCount () {
    return this.props.story.other_links_count
  }

  get category () {
    return this.props.story.main_category
  }
}

Story.propTypes = {
  handleStoryLinks: PropTypes.func.isRequired,
  handleVisitedStory: PropTypes.func.isRequired,
  isVisited: PropTypes.bool.isRequired,
  options: PropTypes.shape({
    renderCategory: PropTypes.bool
  }),
  story: PropTypes.object.isRequired
}

Story.defaultProps = {
  isVisited: false,
  options: {
    renderCategory: true
  }
}

export default Story
