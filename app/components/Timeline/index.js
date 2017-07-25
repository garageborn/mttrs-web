import React, { Component, PropTypes } from 'react'
import StoryList from '../StoryList'
import styles from './styles.css'

class Timeline extends Component {
  constructor() {
    super()
    this.ref = this.ref.bind(this)
  }

  componentDidMount () {
    this.measureTimeline()
  }

  render () {
    const { items } = this.props.data
    if (!items || !items.length) return null

    return <div ref={this.ref} className={styles.container} id='timeline'>{this.renderTimeline()}</div>
  }

  ref (component) {
    return this.timeline = component;
  }

  measureTimeline () {
    if (_server_) return
    const viewportHeight = window.innerHeight
    const timelineOffset = this.timeline.offsetHeight
    const timelineHeight = this.timeline.clientHeight
    const timelineViewHeight = timelineOffset + timelineHeight
    if ((viewportHeight - timelineViewHeight) < 0) return
    return this.props.infiniteScroll()
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
  type: PropTypes.string,
  infiniteScroll: PropTypes.func.isRequired
}

export default Timeline
