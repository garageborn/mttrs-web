import Settings from './settings'
import Wrapper from './wrapper'
import buildRoutes from './configureRoutes'
import ExposeWindowMethods from './exposeWindowMethods'

class Config {
  constructor (options) {
    this.options = options
    this.settings = this.buildSettings()
    this.wrapper = this.buildWrapper()
    this.buildRoutes = buildRoutes(this.settings.apolloClient)
    this.exposeWindowMethods()
  }

  buildSettings () {
    const settings = new Settings()
    settings.run(this.options)
    return settings.attributes
  }

  buildWrapper () {
    return new Wrapper({
      settings: this.settings,
      request: this.options.request,
      window: this.options.window
    })
  }

  exposeWindowMethods () {
    const windowMethods = new ExposeWindowMethods()
    return windowMethods.run({
      settings: this.settings,
      window: this.options.window
    })
  }
}

export default Config
