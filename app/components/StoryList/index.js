import React, {Component, PropTypes} from 'react'
import StoryContainer from '../../containers/StoryContainer'
import StoryListHeader from '../StoryListHeader'
import styles from './styles.css'

class StoryListContainer extends Component {
  render () {
    const {date, stories} = this.props

    return (
      <div className={styles.container}>
        <StoryListHeader date={date} />
        {stories.map((story) => this.renderStory(story))}
      </div>
    )
  }

  renderStory (story) {
    return <StoryContainer key={story.id} story={story} options={this.props.options} />
  }
}

StoryListContainer.propTypes = {
  stories: PropTypes.array.isRequired,
  date: PropTypes.any.isRequired,
  options: PropTypes.shape({
    renderCategory: PropTypes.bool
  })
}

StoryListContainer.defaultProps = {
  options: {
    renderCategory: true
  }
}

export default StoryListContainer
