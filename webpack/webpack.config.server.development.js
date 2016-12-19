import webpack from 'webpack'
import baseConfiguration from './webpack.config.server'

import applicationConfiguration from '../server/common/configuration'
const configuration = Object.assign({}, baseConfiguration)

// Network path for static files: fetch all statics from webpack development server
const host = applicationConfiguration.development.webpack.development_server.host
const port = applicationConfiguration.development.webpack.development_server.port
const path = configuration.output.publicPath
configuration.output.publicPath = `http://${host}:${port}${path}`

export default configuration
