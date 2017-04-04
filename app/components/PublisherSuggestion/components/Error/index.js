import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { properties } from '../../../../utils/variables'
import Button from '../../../Button'
import styles from './styles.css'

const messages = defineMessages({
  error: { id: 'publisher.suggestion.error' },
  refreshButton: { id: 'publisher.suggestion.refreshButton' }
})

const { white, mttrsOrange } = properties
let skin = { backgroundColor: mttrsOrange, color: white }

const Error = ({ intl, onErrorRefresh }) => (
  <div className={styles.container}>
    <div className={styles.message}>
      <p className={styles.text}>
        {intl.formatMessage(messages.error)}
      </p>
    </div>
    <Button onClick={onErrorRefresh} skin={skin}>
      {intl.formatMessage(messages.refreshButton)}
    </Button>
  </div>
)

Error.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  onErrorRefresh: PropTypes.func.isRequired
}

export default injectIntl(Error)
