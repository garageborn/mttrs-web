import React, { PropTypes } from 'react'
import PublisherIcon from '../PublisherIcon'
import styles from './styles.css'

const CurrentPublisher = ({publisher, closeMenu}) => {
  return (
    <div className={styles.publisher}>
      <PublisherIcon publisher={publisher} size='huge' />
      {publisher.name}
    </div>
  )
}

CurrentPublisher.propTypes = {
  publisher: PropTypes.object.isRequired,
  closeMenu: PropTypes.func.isRequired
}

export default CurrentPublisher
