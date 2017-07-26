import React, { PropTypes } from 'react'
import className from 'classnames'
import { injectIntl, defineMessages } from 'react-intl'
import injectSettings from '../../../../config/injectSettings'
import iosEN from './assets/ios-en.svg'
import iosPT from './assets/ios-pt.svg'
import iosES from './assets/ios-es.svg'
import iosDE from './assets/ios-de.svg'
import androidEN from './assets/android-en.png'
import androidPT from './assets/android-pt.png'
import androidES from './assets/android-es.png'
import androidDE from './assets/android-de.png'
import styles from './styles.css'

const messages = defineMessages({
  ios: { id: 'mttrs.download.ios' },
  android: { id: 'mttrs.download.android' }
})

const badges = {
  ios: { en: iosEN, pt: iosPT, es: iosES, de: iosDE },
  android: { en: androidEN, pt: androidPT, es: androidES, de: androidDE }
}

const Badge = ({ intl, url, type, settings }) => {
  let alt = intl.formatMessage(messages[type])
  let badge = badges[type][settings.language]

  let badgeClassName = className({
    [styles.badge]: true,
    [styles.ios]: type === 'ios',
    [styles.android]: type === 'android'
  })

  return (
    <a href={url} className={styles.link} target='_blank'>
      <img className={badgeClassName} src={badge} alt={alt} />
    </a>
  )
}

Badge.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  settings: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

Badge.defaultProps = {
  type: 'android'
}

const BadgeWithIntl = injectIntl(Badge)
export default injectSettings(BadgeWithIntl)
