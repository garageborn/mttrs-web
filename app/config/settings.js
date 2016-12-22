import { TENANTS } from '../constants/Tenants'
import moment from 'moment-timezone'
import jstz from 'jstz'
import configureStore from './configureStore'
import configureApollo from './configureApollo'

const defaultLanguage = 'en'
const defaultTenant = 'mttrs_us'
const defaultTimezone = (function () {
  if (_development_) return jstz.determine().name()
  return 'UTC'
}())

class Settings {
  run ({request, window}) {
    if (request) return this.fromServer(request)
    return this.fromClient(window)
  }

  fromServer (request) {
    this.tenant = request.headers.host
    this.timezone = request.headers['x-timezone']
    this.apolloClient = configureApollo({ ssrMode: true, tenant: this.tenant })
    this.store = configureStore({}, this.apolloClient)
  }

  fromClient (window) {
    this.tenant = window.location.host
    this.timezone = jstz.determine().name()
    this.apolloClient = configureApollo({ tenant: this.tenant })
    this.store = configureStore(window.__INITIAL_STATE__, this.apolloClient)
  }

  set tenant (host) {
    let domain = host.split(':')[0]
    this._tenant = TENANTS.find((item) => item.domain.test(domain))
  }

  get tenant () {
    return this._tenant || defaultTenant
  }

  set timezone (timezone) {
    if (moment.tz.zone(timezone) === null) timezone = defaultTimezone
    this._timezone = timezone
  }

  get timezone () {
    return this._timezone || defaultTimezone
  }

  get language () {
    switch (this.tenant) {
      case 'mttrs_us': return 'en'
      case 'mttrs_br': return 'pt'
      default: return defaultLanguage
    }
  }

  get attributes () {
    return {
      apolloClient: this.apolloClient,
      language: this.language,
      store: this.store,
      tenant: this.tenant,
      timezone: this.timezone
    }
  }
}

export default Settings
