import moment from 'moment-timezone'

export default function (timezone, language) {
  switch (language) {
    case 'pt':
      moment.locale('pt')
      break
    case 'es':
      moment.locale('es')
      break
    case 'es':
      moment.locale('de')
      break
    default:
      moment.locale('en')
  }

  moment.tz.setDefault(timezone)
  return moment
}
