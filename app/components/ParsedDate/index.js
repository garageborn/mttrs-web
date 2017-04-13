import React, { Component, PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import injectSettings from '../../config/injectSettings'
import moment from '../../utils/Moment'

const messages = defineMessages({
  lastWeek: { id: 'lastWeek' },
  lastMonth: { id: 'lastMonth' },
  today: { id: 'today' },
  yesterday: { id: 'yesterday' },
  dateFormat: { id: 'dateFormat' }
})

class ParsedDate extends Component {
  shouldComponentUpdate (nextProps) {
    return this.props.date !== nextProps.date
  }

  parser (date) {
    let { intl, settings } = this.props
    let { timezone, language } = settings

    switch (date) {
      case 'last_week':
        return intl.formatMessage(messages.lastWeek)
      case 'last_month':
        return intl.formatMessage(messages.lastMonth)
      default:
        return moment(timezone, language).unix(date).calendar(null, {
          sameDay: `[${intl.formatMessage(messages.today)}]`,
          lastDay: `[${intl.formatMessage(messages.yesterday)}]`,
          lastWeek: intl.formatMessage(messages.dateFormat),
          sameElse: intl.formatMessage(messages.dateFormat)
        })
    }
  }

  render () {
    let { date, component, className } = this.props
    let parsedDate = this.parser(date)
    return <component.type className={className}>{parsedDate}</component.type>
  }
}

ParsedDate.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  date: PropTypes.number,
  component: PropTypes.element.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  settings: PropTypes.object.isRequired
}

const ParsedDateWithIntl = injectIntl(ParsedDate)
export default injectSettings(ParsedDateWithIntl)
