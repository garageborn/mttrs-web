/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import styles from './styles.css'

const messages = defineMessages({
  spinner: {
    id: 'spinner.loading',
    defaultMessage: 'Loading...'
  }
})

class Spinner extends Component {
  render () {
    let { formatMessage } = this.props.intl
    return (
      <div className={styles.container}>
        <div className={styles.progress}>
          <div>{formatMessage(messages.spinner)}</div>
        </div>
      </div>
    )
  }
}

Spinner.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(Spinner)
