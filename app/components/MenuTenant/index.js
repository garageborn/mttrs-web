import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import MenuTenantItem from '../MenuTenantItem'
import injectSettings from '../../config/injectSettings'
import styles from './styles.css'

const messages = defineMessages({
  source: {
    id: 'mttrs.source'
  }
})

const MenuTenant = ({ settings, intl }) => (
  <div className={styles.container}>
    <p className={styles.title}>{intl.formatMessage(messages.source)}</p>
    <ul className={styles.list}>
      <MenuTenantItem tenant='mttrs_ar' currentTenant={settings.tenant}>
        Argentina - Español
      </MenuTenantItem>
      <MenuTenantItem tenant='mttrs_au' currentTenant={settings.tenant}>
        Australia - English
      </MenuTenantItem>
      <MenuTenantItem tenant='mttrs_br' currentTenant={settings.tenant}>
        Brasil - Português
      </MenuTenantItem>
      <MenuTenantItem tenant='mttrs_cl' currentTenant={settings.tenant}>
        Chile - Español
      </MenuTenantItem>
      <MenuTenantItem tenant='mttrs_ca' currentTenant={settings.tenant}>
        Canada - English
      </MenuTenantItem>
      <MenuTenantItem tenant='mttrs_de' currentTenant={settings.tenant}>
        Deutschland - Deutsch
      </MenuTenantItem>
      <MenuTenantItem tenant='mttrs_es' currentTenant={settings.tenant}>
        España - Español
      </MenuTenantItem>
      <MenuTenantItem tenant='mttrs_mx' currentTenant={settings.tenant}>
        México - Español
      </MenuTenantItem>
      <MenuTenantItem tenant='mttrs_pt' currentTenant={settings.tenant}>
        Portugal - Português
      </MenuTenantItem>
      <MenuTenantItem tenant='mttrs_uk' currentTenant={settings.tenant}>
        United Kingdom - English
      </MenuTenantItem>
      <MenuTenantItem tenant='mttrs_us' currentTenant={settings.tenant}>
        USA - English
      </MenuTenantItem>
      <MenuTenantItem tenant='mttrs_us_es' currentTenant={settings.tenant}>
        USA - Español
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
