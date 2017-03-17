import React, { Component, PropTypes } from 'react'
import StoryContainer from '../../containers/StoryContainer'
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
      <StoryContainer
        key={story.id}
        story={story}
        options={this.props.options}
        handleStoryLinks={this.props.handleStoryLinks}
      />
    )
  }
}

StoryList.propTypes = {
  date: PropTypes.any.isRequired,
  handleStoryLinks: PropTypes.func.isRequired,
  options: PropTypes.shape({
    renderCategory: PropTypes.bool
  }),
  stories: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
}

StoryList.defaultProps = {
  options: {
    renderCategory: true
  }
}

export default StoryList
