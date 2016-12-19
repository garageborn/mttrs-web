import React, { PropTypes } from 'react'
import PublisherIcon from '../PublisherIcon'
import SocialCount from '../SocialCount'
import styles from './styles.css'

const StoryLink = ({type, storyLink}) => {
  return (
    <div className={styles.container}>
      <PublisherIcon publisher={storyLink.publisher} />
      {storyLink.title}
      <SocialCount totalSocial={storyLink.total_social} />
    </div>
  )
}

StoryLink.propTypes = {
  mainLink: PropTypes.object.isRequired,
  otherLinks: PropTypes.array,
  totalSocial: PropTypes.number
}

export default StoryLink
