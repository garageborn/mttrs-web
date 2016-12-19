import React, { Component, PropTypes } from 'react'
import classNames from 'classNames'
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
    let { mainLink, otherLinks, totalSocial } = this.props

    return (
      <div className={this.getClassNames()}>
        <StoryInfo mainLink={mainLink} otherLinks={otherLinks} />
        <SocialCount totalSocial={totalSocial} />
      </div>
    )
  }
}

StoryMetadata.propTypes = {
  mainLink: PropTypes.object.isRequired,
  otherLinks: PropTypes.array.isRequired,
  totalSocial: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired
}

export default StoryMetadata
