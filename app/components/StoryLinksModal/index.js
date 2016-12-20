import React, { PropTypes } from 'react'
import StoryLinkContainer from '../../containers/StoryLinkContainer'
import styles from './style.css'

const StoryLinksModal = ({mainLink, otherLinks}) => {
  return (
    <div className={styles.container}>
      <StoryLinkContainer key={mainLink.id} type='main' storyLink={mainLink} />
      {otherLinks.map((storyLink) =>
        <StoryLinkContainer key={storyLink.id} type='other' storyLink={storyLink} />
      )}
    </div>
  )
}

StoryLinksModal.propTypes = {
  mainLink: PropTypes.object.isRequired,
  otherLinks: PropTypes.array.isRequired
}

export default StoryLinksModal
