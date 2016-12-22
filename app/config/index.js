import Settings from './settings'
import Wrapper from './wrapper'
import buildRoutes from './configureRoutes'

class Config {
  constructor (options) {
    this.options = options
    this.settings = this.buildSettings(options)
    this.wrapper = this.buildWrapper(options)
    this.buildRoutes = buildRoutes(this.settings.apolloClient)
  }

  buildSettings (options) {
    let settings = new Settings()
    settings.run(this.options)
    return settings.attributes
  }

  buildWrapper (options) {
    return new Wrapper({
      settings: this.settings,
      request: options.request,
      window: options.window
    })
  }
}

export default Config
