import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import styles from './styles.css'

const messages = defineMessages({
  loading: { id: 'loading' }
})

const Loading = ({ intl }) => (
  <div className={styles.loading}>{intl.formatMessage(messages.loading)}</div>
)

Loading.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(Loading)
