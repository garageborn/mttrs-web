import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import styles from './styles.css'

const messages = defineMessages({
  spinner: {
    id: 'loading',
    defaultMessage: 'Loading...'
  }
})

const Spinner = ({intl}) => {
  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <div>{intl.formatMessage(messages.spinner)}</div>
      </div>
    </div>
  )
}

Spinner.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(Spinner)
