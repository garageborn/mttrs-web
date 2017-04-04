import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import MenuTenantItem from '../MenuTenantItem'
import injectSettings from '../../config/injectSettings'
import styles from './styles.css'

const messages = defineMessages({
  source: {
    id: 'mttrs.source'
  },
  brasil: {
    id: 'brasil'
  },
  usa: {
    id: 'usa'
  }
})

const MenuTenant = ({ settings, intl }) => (
  <div className={styles.container}>
    <p className={styles.title}>{intl.formatMessage(messages.source)}</p>
    <ul className={styles.list}>
      <MenuTenantItem tenant='mttrs_br' currentTenant={settings.tenant}>
        {intl.formatMessage(messages.brasil)}
      </MenuTenantItem>
      <MenuTenantItem tenant='mttrs_us' currentTenant={settings.tenant}>
        {intl.formatMessage(messages.usa)}
      </MenuTenantItem>
    </ul>
  </div>
)

MenuTenant.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  settings: PropTypes.object.isRequired
}

const MenuTenantWithIntl = injectIntl(MenuTenant)

export default injectSettings(MenuTenantWithIntl)
