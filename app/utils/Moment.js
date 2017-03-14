import moment from 'moment-timezone'

export default function (timezone, language) {
  if (language === 'pt') {
    moment.locale('pt')
  } else {
    moment.locale('en')
  }

  moment.tz.setDefault(timezone)
  return moment
}
