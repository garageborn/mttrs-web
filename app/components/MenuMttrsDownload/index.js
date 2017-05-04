import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import injectSettings from '../../config/injectSettings'
import Badge from './components/Badge'
import styles from './styles.css'

const messages = defineMessages({
  slogan: { id: 'mttrs.download.slogan' }
})

const androidUrl = lang => {
  let baseUrl = 'https://play.google.com/store/apps/details'
  let query = `?id=garageborn.mttrs&hl=${lang}&referrer=utm_source%3Dweb%26utm_medium%3Dmenu`
  return `${ baseUrl }${ query }`
}

const iosUrl = 'https://itunes.apple.com/us/app/matters-news-summaries/id1166566093&ct=menu'

const MenuMttrsDownload = ({ intl, settings }) => (
  <div className={styles.container}>
    <Badge url={androidUrl(settings.language)} type='android' />
    <Badge url={iosUrl} type='ios' />
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
