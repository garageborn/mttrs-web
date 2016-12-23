import React, { PropTypes } from 'react'
import StoryLinkContainer from '../../containers/StoryLinkContainer'
import styles from './style.css'

const StoryLinksModal = ({story, mainLink, otherLinks, isVisited}) => {
  return (
    <div className={styles.container}>
      <StoryLinkContainer story={story} key={mainLink.id} type='main' storyLink={mainLink} isVisited={isVisited} />
      {otherLinks.map((storyLink) =>
        <StoryLinkContainer story={story} key={storyLink.id} type='other' storyLink={storyLink} isVisited={isVisited} />
      )}
    </div>
  )
}

StoryLinksModal.propTypes = {
  story: PropTypes.object.isRequired,
  mainLink: PropTypes.object.isRequired,
  otherLinks: PropTypes.array.isRequired,
  isVisited: PropTypes.bool.isRequired
}

export default StoryLinksModal
