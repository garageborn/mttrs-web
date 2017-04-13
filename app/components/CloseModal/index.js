import React, { PropTypes } from 'react'
import styles from './styles.css'

let text = {
  onboarding: 'skip',
  storyLinks: '\u00D7'
}

let classes = {
  onboarding: {
    container: styles.onboardingContainer,
    button: styles.onboardingButton
  },
  storyLinks: {
    container: styles.storyLinksContainer,
    button: styles.storyLinksButton
  }
}

const CloseModal = ({ type, closeModal }) => {
  return (
    <div className={classes[type].container}>
      <div className={classes[type].button} onClick={closeModal} role='button'>
        <span>{text[type]}</span>
      </div>
    </div>
  )
}

CloseModal.propTypes = {
  closeModal: PropTypes.func.isRequired
}

export default CloseModal
