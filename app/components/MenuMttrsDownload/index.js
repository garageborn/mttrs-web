import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import Badge from './components/Badge'
import styles from './styles.css'

const messages = defineMessages({
  slogan: { id: 'mttrs.download.slogan' }
})

const MenuMttrsDownload = ({ intl }) => (
  <div className={styles.container}>
    <p className={styles.slogan}>{intl.formatMessage(messages.slogan)}</p>
    <Badge url='' type='android' />
    <Badge url='' type='ios' />
  </div>
)

MenuMttrsDownload.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(MenuMttrsDownload)
