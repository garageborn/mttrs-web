import React, { Component, PropTypes } from 'react'
import StoryList from '../StoryList'
import styles from './styles.css'

class Timeline extends Component {
  render () {
    const { items } = this.props.data
    if (!items || !items.length) return null

    return <div className={styles.container} id='timeline'>{this.renderTimeline()}</div>
  }

  renderTimeline () {
    return this.props.data.items.map((item) => {
      return this.renderStoryList(item)
    })
  }

  renderStoryList (item) {
    const { handleStoryLinks, type } = this.props
    if (!item.stories.length) return null
    return (
      <StoryList
        date={item.date}
        handleStoryLinks={handleStoryLinks}
        key={item.date}
        stories={item.stories}
        type={type}
      />
    )
  }
}

Timeline.propTypes = {
  data: PropTypes.object.isRequired,
  handleStoryLinks: PropTypes.func.isRequired,
  type: PropTypes.string
}

export default Timeline
