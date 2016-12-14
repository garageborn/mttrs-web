import React, {Component} from 'react'
import {connect} from 'react-redux'
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

    const { categorySlug, publisherSlug } = this.props

    return (
      <IntlProvider locale={language} defaultLocale='en' messages={msg}>
        <div>
          <HeaderContainer />
          <TimelineContainer categorySlug={categorySlug} publisherSlug={publisherSlug} />
        </div>
      </IntlProvider>
    )
  }
}


let mapStateToProps = (state, ownProps) => {
  return {
    categorySlug: ownProps.route.categorySlug,
    publisherSlug: ownProps.route.publisherSlug
  }
}

export default connect(mapStateToProps)(Root)
