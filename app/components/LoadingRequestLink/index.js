import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import mttrsLoading from '../../assets/mttrs-loading-request-link.gif'
import styles from './styles.css'

const messages = defineMessages({
  requestingLink: {
    id: 'request.link',
    defaultMessage: 'Requesting link...'
  }
})

const LoadingRequestLink = ({intl}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={mttrsLoading} alt='' />
      <p className={styles.label}>{intl.formatMessage(messages.requestingLink)}</p>
    </div>
  )
}

LoadingRequestLink.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(LoadingRequestLink)
