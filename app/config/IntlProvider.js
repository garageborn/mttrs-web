import React, { Component, PropTypes } from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'
import * as messages from '../common/translations/i18n'
import Setup from '../config/Setup'
addLocaleData([...en, ...pt])

class Provider extends Component {
  render () {
    const msg = messages[Setup.language]

    return (
      <IntlProvider locale={Setup.language} defaultLocale='en' messages={msg}>
        { this.props.children }
      </IntlProvider>
    )
  }
}

Provider.propTypes = {
  children: PropTypes.any.isRequired
}

export default Provider
