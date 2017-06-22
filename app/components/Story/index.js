import React, { Component, PropTypes } from 'react'
import StoryMainContent from '../StoryMainContent'
import StoryMetadata from '../StoryMetadata'
import StorySummary from '../StorySummary'
import styles from './styles.css'

class Story extends Component {
  render () {
    const { story, handleStoryLinks } = this.props
    return (
      <li key={story.id} className={styles.container}>
        <StoryMainContent
          story={story}
          mainLink={this.mainLink}
          category={this.category}
        />
        {this.renderSummary()}
        <StoryMetadata
          story={story}
          mainLink={this.mainLink}
          otherLinksCount={this.otherLinksCount}
          totalSocial={story.total_social}
          handleStoryLinks={handleStoryLinks}
        />
      </li>
    )
  }

  renderSummary () {
    const { story } = this.props
    if (!story.summary) return
    return <StorySummary story={story} />
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
  story: PropTypes.object.isRequired
}

Story.defaultProps = {
  options: {
    renderCategory: true
  }
}

export default Story
