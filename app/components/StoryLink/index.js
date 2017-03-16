import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import RestrictContentLabel from '../RestrictContentLabel'
import PublisherIcon from '../PublisherIcon'
import SocialCount from '../SocialCount'
import styles from './styles.css'

const StoryLink = ({ story, type, storyLink, closeModal }) => {
  let containerClass = classNames({
    [styles.container]: true,
    [styles.main]: type === 'main'
  })

  return (
    <div className={containerClass}>
      <div>
        <Link onClick={closeModal} className={styles.primary} to={storyLink.publisher.slug}>
          <PublisherIcon size='big' publisher={storyLink.publisher} />
          <h2 className={styles.publisherName}>
            {storyLink.publisher.display_name || storyLink.publisher.name}
          </h2>
          {storyLink.publisher.restrict_content && <RestrictContentLabel />}
        </Link>
      </div>
      <div className={styles.secondary}>
        <a className={styles.title} onClick={closeModal} href={storyLink.url} alt={storyLink.title} target='_blank'><h3>{storyLink.title}</h3></a>
        <div className={styles.countContainer}><SocialCount totalSocial={storyLink.total_social} /></div>
      </div>
    </div>
  )
}

StoryLink.propTypes = {
  story: PropTypes.object.isRequired,
  type: PropTypes.string,
  storyLink: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default StoryLink
