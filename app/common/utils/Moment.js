import moment from 'moment-timezone'
import Setup from '../../config/Setup'

console.log('# moment', Setup.timezone)
moment.tz.setDefault(Setup.timezone)
export default moment
