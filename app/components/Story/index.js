import React, { Component, PropTypes } from 'react'
import className from 'classnames'
import StoryMainContent from '../StoryMainContent'
import StoryMetadata from '../StoryMetadata'
import StorySummary from '../StorySummary'
import styles from './styles.css'

class Story extends Component {
  render () {
    const { story, handleStoryLinks, isVisited } = this.props
    return (
      <li key={story.id} className={styles.container}>
        <StoryMainContent
          story={story}
          mainLink={this.mainLink}
          category={this.category}
          isVisited={isVisited}
        />
        {this.renderSummary()}
        <StoryMetadata
          story={story}
          mainLink={this.mainLink}
          otherLinksCount={this.otherLinksCount}
          totalSocial={story.total_social}
          handleStoryLinks={handleStoryLinks}
          isVisited={isVisited}
        />
      </li>
    )
  }

  renderSummary () {
    const { story, isVisited } = this.props
    if (!story.summary) return
    return <StorySummary story={story} isVisited={isVisited} />
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
  isVisited: PropTypes.bool.isRequired,
  story: PropTypes.object.isRequired
}

Story.defaultProps = {
  isVisited: false,
  options: {
    renderCategory: true
  }
}

export default Story
