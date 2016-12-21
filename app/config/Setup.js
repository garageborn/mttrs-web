import { TENANTS } from '../constants/Tenants'
import moment from 'moment-timezone'

console.log('--------------------setup maldiiitoooooooooo')
class Setup {
  static fromRequest (request) {
    console.log('==============fromRequest')
    this.tenant = request.headers.host
    this.timezone = request.headers['X-TIMEZONE']
  }

  static fromWindow (window) {
    this.tenant = window.location.host
    this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  }

  static set tenant (host) {
    let domain = host.split(':')[0]
    this._tenant = TENANTS.find((item) => item.domain.test(domain))
  }

  static get tenant () {
    return this._tenant || this.defaultTenant
  }

  static set timezone (timezone) {
    console.log('--------set timezone', timezone, moment.tz.zone(timezone) !== null)
    if (moment.tz.zone(timezone) !== null) this._timezone = timezone
  }

  static get timezone () {
    console.log('--------get timezone', this._timezone)
    return this._timezone || this.defaultTimezone
  }

  static get language () {
    switch (this.tenant) {
      case 'mttrs_us': return 'en'
      case 'mttrs_br': return 'pt'
      default: return this.defaultLanguage
    }
  }
}

Setup.defaultTenant = 'mttrs_us'
Setup.defaultTimezone = 'UTC'
Setup.defaultLanguage = 'en'

export default Setup
