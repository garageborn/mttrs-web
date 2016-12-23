import React, { PropTypes } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'
import PublisherIcon from '../PublisherIcon'
import SocialCount from '../SocialCount'
import styles from './styles.css'

const StoryLink = ({story, type, storyLink, closeModal, isVisited}) => {
  let containerClass = classNames({
    [styles.container]: true,
    [styles.main]: type === 'main',
    [styles.read]: isVisited
  })
  return (
    <div className={containerClass}>
      <div>
        <Link onClick={closeModal} className={styles.primary} to={storyLink.publisher.slug}>
          <PublisherIcon size='big' publisher={storyLink.publisher} />
          <h2 className={styles.publisherName}>{storyLink.publisher.name}</h2>
        </Link>
      </div>
      <div className={styles.secondary}>
        <a className={styles.title} onClick={closeModal} href={storyLink.url} alt={storyLink.title}><h3>{storyLink.title}</h3></a>
        <div className={styles.countContainer}><SocialCount totalSocial={storyLink.total_social} /></div>
      </div>
    </div>
  )
}

StoryLink.propTypes = {
  story: PropTypes.object.isRequired,
  type: PropTypes.string,
  storyLink: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
  isVisited: PropTypes.bool.isRequired
}

export default StoryLink
