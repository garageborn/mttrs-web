/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'
import es from 'react-intl/locale-data/es'
import injectSettings from '../config/injectSettings'
import * as messages from '../translations/i18n'
addLocaleData([...en, ...pt, ...es])

class Provider extends Component {
  render () {
    const { settings } = this.props
    const msg = messages[settings.language]

    return (
      <IntlProvider locale={settings.language} defaultLocale='en' messages={msg}>
        { this.props.children }
      </IntlProvider>
    )
  }
}

Provider.propTypes = {
  children: PropTypes.any.isRequired,
  settings: PropTypes.shape({
    timezone: PropTypes.string.isRequired
  }).isRequired
}

export default injectSettings(Provider)
