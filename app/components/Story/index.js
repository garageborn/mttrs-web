import React, {Component, PropTypes} from 'react'
import StoryImage from '../StoryImage'
import StoryContent from '../StoryContent'
import StoryCategory from '../StoryCategory'
import styles from './styles.css'
import StoryMetadata from '../StoryMetadata'

class Story extends Component {
  renderCategory () {
    let pathname = this.props.routing.pathname

    if (pathname !== '/') return
    return <StoryCategory category={this.category} />
  }
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
  story: PropTypes.object.isRequired
}

export default Story
