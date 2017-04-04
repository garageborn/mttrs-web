import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { injectIntl, defineMessages } from 'react-intl'
import styles from './styles.css'

const messages = defineMessages({
  back: { id: 'back' },
  success: { id: 'publisher.suggestion.success' }
})

const Success = ({ intl, onBack }) => (
  <div>
    <p className={styles.text}>{intl.formatMessage(messages.success)}</p>
    <Link onClick={onBack} className={styles.back}>
      <small>{intl.formatMessage(messages.back)}</small>
    </Link>
  </div>
)

Success.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  onBack: PropTypes.func.isRequired
}

export default injectIntl(Success)
