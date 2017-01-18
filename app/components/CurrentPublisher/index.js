import React, { PropTypes } from 'react'
import PublisherIcon from '../PublisherIcon'
import styles from './styles.css'

const CurrentPublisher = ({publisher}) => {
  if (!publisher) return <div />
  return (
    <div className={styles.container}>
      <div className={styles.publisher}>
        <PublisherIcon publisher={publisher} size='huge' />
        {publisher.name}
      </div>
    </div>
  )
}

CurrentPublisher.propTypes = {
  publisher: PropTypes.object
}

export default CurrentPublisher
