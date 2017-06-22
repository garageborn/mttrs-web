import React, { Component, PropTypes } from 'react'
import Story from '../Story'
import StoryListHeader from '../StoryListHeader'
import styles from './styles.css'

class StoryList extends Component {
  getClassNames () {
    const { type } = this.props
    if (type !== 'publisher') return styles.container
    return styles.containerPublisher
  }

  render () {
    const {date, stories} = this.props
    return (
      <div className={this.getClassNames()}>
        <StoryListHeader date={date} />
        <ul>
          {stories.map((story) => this.renderStory(story))}
        </ul>
      </div>
    )
  }

  renderStory (story) {
    return (
      <Story
        key={story.id}
        story={story}
        handleStoryLinks={this.props.handleStoryLinks}
      />
    )
  }
}

StoryList.propTypes = {
  date: PropTypes.any.isRequired,
  handleStoryLinks: PropTypes.func.isRequired,
  stories: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
}

StoryList.defaultProps = {
  options: {
    renderCategory: true
  }
}

export default StoryList
