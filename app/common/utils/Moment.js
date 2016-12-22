import moment from 'moment-timezone'

export default function (timezone) {
  moment.tz.setDefault(timezone)
  return moment
}
