import webpack from 'webpack'
import baseConfiguration from './webpack.config.server'

import applicationConfiguration from '../server/common/configuration'
const configuration = Object.assign({}, baseConfiguration)

configuration.plugins.push(
  // environment variables
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
      BABEL_ENV: JSON.stringify('development/client')
    },
    _production_: false,
    _development_: true,
    _server_: true,
    _client_: false
  })
)

// Network path for static files: fetch all statics from webpack development server
const host = applicationConfiguration.development.webpack.development_server.host
const port = applicationConfiguration.development.webpack.development_server.port
const path = configuration.output.publicPath
configuration.output.publicPath = `http://${host}:${port}${path}`

export default configuration
