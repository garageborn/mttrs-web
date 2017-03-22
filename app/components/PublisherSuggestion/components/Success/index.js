import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import styles from './styles.css'

const messages = defineMessages({
  success: { id: 'publisher.suggestion.success' }
})

const Success = ({ intl }) => <p className={styles.text}>{intl.formatMessage(messages.success)}</p>

Success.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(Success)
