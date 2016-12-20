import React, { PropTypes } from 'react'
import StoryLink from '../StoryLink'
import styles from './style.css'

const StoryLinksModal = ({mainLink, otherLinks}) => {
  return (
    <div className={styles.container}>
      <StoryLink key={mainLink.id} type='main' storyLink={mainLink} />
      {otherLinks.map((storyLink) =>
        <StoryLink key={storyLink.id} type='other' storyLink={storyLink} />
      )}
    </div>
  )
}

StoryLinksModal.propTypes = {
  mainLink: PropTypes.object.isRequired,
  otherLinks: PropTypes.array.isRequired
}

export default StoryLinksModal
