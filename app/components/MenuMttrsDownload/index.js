import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import injectSettings from '../../config/injectSettings'
import Badge from './components/Badge'
import styles from './styles.css'

const messages = defineMessages({
  slogan: { id: 'mttrs.download.slogan' }
})

const androidUrl = lang => `https://play.google.com/store/apps/details?id=garageborn.mttrs&hl=${lang}`

const MenuMttrsDownload = ({ intl, settings }) => (
  <div className={styles.container}>
    <p className={styles.slogan}>{intl.formatMessage(messages.slogan)}</p>
    <Badge url={androidUrl(settings.language)} type='android' />
  </div>
)

MenuMttrsDownload.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  settings: PropTypes.object.isRequired
}

const MenuMttrsDownloadWithIntl = injectIntl(MenuMttrsDownload)
export default injectSettings(MenuMttrsDownloadWithIntl)
