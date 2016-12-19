import React, {Component, PropTypes} from 'react'
import StoryImage from '../StoryImage'
import StoryContent from '../StoryContent'
import StoryCategory from '../StoryCategory'
import styles from './styles.css'
import StoryMetadata from '../StoryMetadata'

class Story extends Component {
  render () {
    const {story} = this.props
    return (
      <div key={story.id} className={styles.container}>
        {this.renderCategory()}
        <div className={styles.story}>
          <StoryImage mainLink={this.mainLink} />
          <StoryContent
            mainLink={this.mainLink}
            otherLinks={this.otherLinks}
            totalSocial={story.total_social}
          />
        </div>
        <StoryMetadata
          source='story'
          mainLink={this.mainLink}
          otherLinks={this.otherLinks}
          totalSocial={story.total_social}
        />
      </div>
    )
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
  })
}

Story.defaultProps = {
  options: {
    renderCategory: true
  }
}

export default Story
