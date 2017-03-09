import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import ios from './assets/ios.png'
import android from './assets/android.png'
import styles from './styles.css'

const messages = defineMessages({
  slogan: {
    id: 'mttrs.download.slogan'
  },

  android: {
    id: 'mttrs.download.android'
  },

  ios: {
    id: 'mttrs.download.ios'
  }
})

const MenuMttrsDownload = ({ intl }) => (
  <div className={styles.container}>
    <p className={styles.slogan}>{intl.formatMessage(messages.slogan)}</p>
    <a href='#'>
      <img className={styles.badge} src={android} alt={intl.formatMessage(messages.android)} />
    </a>
    <a href='#'>
      <img className={styles.badge} src={ios} alt={intl.formatMessage(messages.ios)} />
    </a>
  </div>
)

MenuMttrsDownload.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(MenuMttrsDownload)
