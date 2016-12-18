import React, { Component, PropTypes } from 'react'
import classNames from 'classNames/bind'
import StoryInfo from '../StoryInfo'
import SocialCount from '../SocialCount'
import styles from './styles.css'

let cx = classNames.bind(styles)

class StoryMetadata extends Component {
  getClassNames () {
    return cx({
      container: true,
      shouldShowNotSmall: this.props.source === 'storyContent',
      shouldShowSmall: this.props.source === 'story'
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
