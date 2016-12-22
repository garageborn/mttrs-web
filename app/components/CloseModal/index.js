import React, { PropTypes } from 'react'
import styles from './styles.css'

const CloseModal = ({closeModal}) => {
  return (
    <div className={styles.button} onClick={closeModal} role='button'>
      <span>✕</span>
    </div>
  )
}

CloseModal.propTypes = {
  closeModal: PropTypes.func.isRequired
}

export default CloseModal
