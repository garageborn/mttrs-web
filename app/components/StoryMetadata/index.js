import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import StoryInfo from '../StoryInfo'
import SocialCount from '../SocialCount'
import styles from './styles.css'

class StoryMetadata extends Component {
  getClassNames () {
    return classNames({
      [styles.container]: true,
      [styles.shouldShowNotSmall]: this.props.source === 'storyContent',
      [styles.shouldShowSmall]: this.props.source === 'story'
    })
  }

  render () {
    let {story, mainLink, otherLinks, totalSocial, handleStoryLinks} = this.props

    return (
      <div className={this.getClassNames()}>
        <StoryInfo
          story={story}
          mainLink={mainLink}
          otherLinks={otherLinks}
          handleStoryLinks={handleStoryLinks}
        />
        <SocialCount totalSocial={totalSocial} />
      </div>
    )
  }
}

StoryMetadata.propTypes = {
  story: PropTypes.object.isRequired,
  mainLink: PropTypes.object.isRequired,
  otherLinks: PropTypes.array.isRequired,
  totalSocial: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
  handleStoryLinks: PropTypes.func.isRequired
}

export default StoryMetadata
