import React, {Component} from 'react'
import HeaderContainer from './HeaderContainer'
import TimelineContainer from './TimelineContainer'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'
import * as messages from '../common/translations/i18n'
import Tenant from '../common/utils/Tenant'
import Routes from '../config/Routes'
import intl from 'intl'
addLocaleData([...en, ...pt])

class Root extends Component {
  getLanguage() {
    if (Tenant.current === 'mttrs_br') {
      return 'pt'
    } else {
      return 'en'
    }
  }

  render() {
    const language = this.getLanguage()
    const msg = messages[language]

    return (
      <IntlProvider locale={language} defaultLocale='en' messages={msg}>
        <div>
          <HeaderContainer />
          <TimelineContainer />
        </div>
      </IntlProvider>
    )
  }
}

export default Root
