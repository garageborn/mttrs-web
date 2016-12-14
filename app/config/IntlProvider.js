import React, { Component } from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'
import * as messages from '../common/translations/i18n'
import Tenant from '../common/utils/Tenant'
import intl from 'intl'
addLocaleData([...en, ...pt])

class Provider extends Component {
  render() {
    const msg = messages[this.language]

    return (
      <IntlProvider locale={this.language} defaultLocale='en' messages={msg}>
        { this.props.children }
      </IntlProvider>
    )
  }

  get language() {
    if (Tenant.current === 'mttrs_br') return 'pt'
    return 'en'
  }
}

export default Provider
