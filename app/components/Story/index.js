import React, { Component, PropTypes } from 'react'
import className from 'classnames'
import { Link } from 'react-router'
import { linkPath } from '../../utils/RoutesHelper'
import StoryImage from '../StoryImage'
import StoryContent from '../StoryContent'
import StoryMetadata from '../StoryMetadata'
import StorySummary from '../StorySummary'
import styles from './styles.css'

class Story extends Component {
  render () {
    const { story, handleStoryLinks, options } = this.props
    return (
      <div key={story.id} className={this.storyContainerClass()}>
        <Link
          className={styles.story}
          to={linkPath(this.mainLink.slug)}
          target='_blank'
        >
          <StoryImage story={story} mainLink={this.mainLink} />
          <StoryContent
            mainLink={this.mainLink}
            shouldRenderCategory={options.renderCategory}
            category={this.category}
          />
        </Link>
        {this.renderSummary()}
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

  renderSummary () {
    const {story} = this.props
    if (!story.summary) return
    return <StorySummary story={story} />
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
