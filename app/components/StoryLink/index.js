import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { injectIntl, defineMessages } from 'react-intl'
import classNames from 'classnames'
import PublisherIcon from '../PublisherIcon'
import SocialCount from '../SocialCount'
import styles from './styles.css'

const messages = defineMessages({
  restrictContent: { id: 'restrict.content' }
})

const StoryLink = ({ intl, story, type, storyLink, closeModal }) => {
  let containerClass = classNames({
    [styles.container]: true,
    [styles.main]: type === 'main'
  })

  let restrictContent = intl.formatMessage(messages.restrictContent)

  return (
    <div className={containerClass}>
      <div>
        <Link onClick={closeModal} className={styles.primary} to={storyLink.publisher.slug}>
          <PublisherIcon size='big' publisher={storyLink.publisher} />
          <h2 className={styles.publisherName}>{storyLink.publisher.name}</h2>
          {storyLink.publisher.restrict_content &&
            <p className={styles.restrictContent}>
              | <span>{restrictContent}</span>
            </p>
          }
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
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  story: PropTypes.object.isRequired,
  type: PropTypes.string,
  storyLink: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default injectIntl(StoryLink)
