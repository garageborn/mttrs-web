import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import Icon from './assets/mttrs.inline.svg'
import styles from './styles.css'

const messages = defineMessages({
  about: {
    id: 'mttrs.about.understand'
  }
})

const MenuAboutMttrs = ({ intl, openOnboarding }) => (
  <div className={styles.container} onClick={openOnboarding} role='button'>
    <p>{intl.formatMessage(messages.about)}&nbsp;</p>
    <Icon />
  </div>
)

MenuAboutMttrs.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  openOnboarding: PropTypes.func.isRequired
}

export default injectIntl(MenuAboutMttrs)
