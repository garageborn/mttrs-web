import webpack from 'webpack'
import baseConfiguration from './webpack.config.server'
const configuration = Object.assign({}, baseConfiguration)

configuration.plugins.push(
  // environment variables
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
      BABEL_ENV: JSON.stringify('development/client')
    },
    _production_: true,
    _development_: false,
    _server_: true,
    _client_: false
  })
)

export default configuration
