import React, { PropTypes } from 'react'
import Story from '../Story'
import StoryListHeader from '../StoryListHeader'
import styles from './styles.css'

const StoryListContainer = ({date, stories, handleStoryLinks, options}) => {
  return (
    <div className={styles.container}>
      <StoryListHeader date={date} />
      {stories.map((story) => <Story key={story.id} story={story} options={options} />)}
    </div>
  )
}

StoryListContainer.propTypes = {
  stories: PropTypes.array.isRequired,
  date: PropTypes.any.isRequired,
  options: PropTypes.shape({
    renderCategory: PropTypes.bool
  }),
  handleStoryLinks: PropTypes.func.isRequired
}

StoryListContainer.defaultProps = {
  options: {
    renderCategory: true
  }
}

export default StoryListContainer
