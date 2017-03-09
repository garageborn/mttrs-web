import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import styles from './styles.css'

const messages = defineMessages({
  slogan: {
    id: 'mttrs.slogan'
  }
})

const HeaderSlogan = ({ intl }) => (
  <div className={styles.slogan}>
    <p>{intl.formatMessage(messages.slogan)}</p>
  </div>
)

HeaderSlogan.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(HeaderSlogan)
