import moment from 'moment-timezone'
import Setup from '../../config/Setup'

console.log('------------------moment.js', Setup.language)
moment.tz.setDefault(Setup.language)

export default moment
