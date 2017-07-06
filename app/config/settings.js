/* global _server_ _development_ */
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
    if (_server_) return this.fromServer(request)
    return this.fromClient(window)
  }

  fromServer (request) {
    this.tenant = request.headers.host
    this.timezone = request.headers['x-timezone'] || request.headers['x-geoip-timezone']
    this.apolloClient = configureApollo({ ssrMode: true, tenant: this.tenant, timezone: this.timezone })
    this.store = configureStore({}, this.apolloClient)
  }

  fromClient (window) {
    this.tenant = window.location.host
    this.timezone = jstz.determine().name()
    this.apolloClient = configureApollo({ tenant: this.tenant, timezone: this.timezone })
    this.store = configureStore(window.__INITIAL_STATE__, this.apolloClient)
  }

  set tenant (host) {
    let domain = host.split(':')[0]
    let tenant = TENANTS.find((item) => item.domain.test(domain))
    if (tenant) tenant = tenant.id
    this._tenant = tenant
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
    const tenant = TENANTS.find((item) => item.id === this.tenant)
    return tenant ? tenant.language : defaultLanguage
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
