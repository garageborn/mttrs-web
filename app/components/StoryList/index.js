import React, { PropTypes } from 'react'
import Story from '../Story'
import StoryListHeader from '../StoryListHeader'
import styles from './styles.css'

const StoryListContainer = ({date, stories, routing}) => {
  return (
    <div className={styles.container}>
      <StoryListHeader date={date} />
      {stories.map((story) => <Story key={story.id} story={story} routing={routing} />)}
    </div>
  )
}

StoryListContainer.propTypes = {
  stories: PropTypes.array.isRequired,
  date: PropTypes.any.isRequired
}

export default StoryListContainer
