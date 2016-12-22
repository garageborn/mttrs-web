import moment from './Moment'

const ParseDate = (date, timezone) => {
  switch (date) {
    case 'last_week':
      return 'Last Week'
    case 'last_month':
      return 'Last Month'
    default:
      return moment(timezone).unix(date).calendar(null, {
        sameDay: '[Today]',
        lastDay: '[Yesterday]',
        lastWeek: 'MMMM D',
        sameElse: 'MMMM D'
      })
  }
}

export default ParseDate
