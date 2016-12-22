import moment from 'moment-timezone'
import Setup from '../../config/Setup'

moment.tz.setDefault(Setup.timezone)
export default moment
