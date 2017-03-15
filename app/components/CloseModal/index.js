import React, { PropTypes } from 'react'
import styles from './styles.css'

const CloseModal = ({ closeModal }) => (
  <div className={styles.container}>
    <div className={styles.button} onClick={closeModal} role='button'>
      <span>✕</span>
    </div>
  </div>
)

CloseModal.propTypes = {
  closeModal: PropTypes.func.isRequired
}

export default CloseModal
