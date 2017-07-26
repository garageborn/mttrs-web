import React, { PropTypes } from 'react'
import RestrictContentLabel from '../RestrictContentLabel'
import PublisherIcon from '../PublisherIcon'
import styles from './styles.css'

const StoryPublishersItem = ({ publisher, restricted }) => {
  const renderRestricted = () => {
    if (restricted) return <RestrictContentLabel />
    return null
  }

  return (
    <div className={styles.container}>
      <PublisherIcon size='small' publisher={publisher} />
      {renderRestricted()}
    </div>
  )
}

StoryPublishersItem.propTypes = {
  publisher: PropTypes.object.isRequired
}

export default StoryPublishersItem
