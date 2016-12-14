import React, {Component, PropTypes} from 'react'
import StoryImage from './StoryImage'
import StoryContent from './StoryContent'

class Story extends Component {
  render() {
    const {story} = this.props
    return (
      <div className='story'>
        <StoryImage mainLink={this.mainLink} />
        <StoryContent mainLink={this.mainLink} otherLinks={this.otherLinks} totalSocial={story.total_social} />
      </div>
    )
  }

  get mainLink() {
    return this.props.story.main_link
  }

  get otherLinks() {
    return this.props.story.other_links
  }
}

Story.propTypes = {
  story: PropTypes.object.isRequired
}

export default Story
