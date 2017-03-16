import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import styles from './styles.css'

const messages = defineMessages({
  restrictContent: { id: 'restrict.content' }
})

const RestrictContentLabel = ({ intl }) => (
  <p className={styles.container}>
    <span className={styles.label}>{intl.formatMessage(messages.restrictContent)}</span>
  </p>
)

RestrictContentLabel.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(RestrictContentLabel)
