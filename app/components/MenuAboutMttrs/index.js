import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import Icon from './assets/mttrs.inline.svg'
import styles from './styles.css'

const messages = defineMessages({
  understand: {
    id: 'mttrs.about.understand'
  }
})

const MenuAboutMttrs = ({ intl }) => (
  <div className={styles.container}>
    <p>{intl.formatMessage(messages.understand)}</p>
    <Icon />
  </div>
)

MenuAboutMttrs.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(MenuAboutMttrs)
