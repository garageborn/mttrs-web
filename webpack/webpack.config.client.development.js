import webpack from 'webpack'
import baseConfiguration from './webpack.config.client'
import applicationConfiguration from '../server/common/configuration'

const configuration = baseConfiguration({ development: true, css_bundle: true })
configuration.devtool = 'inline-eval-cheap-source-map'

configuration.plugins.push(
  // environment variables
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
      BABEL_ENV: JSON.stringify('development/client')
    },
    _production_: false,
    _development_: true,
    _development_tools_: false  // enable/disable redux-devtools
  }),

  // faster code reload on changes
  new webpack.HotModuleReplacementPlugin(),

  // // extracts common javascript into a separate file (works)
  // new webpack.optimize.CommonsChunkPlugin('common', 'common.[hash].js')
)

// enable webpack development server
const host = applicationConfiguration.development.webpack.development_server.host
const port = applicationConfiguration.development.webpack.development_server.port
configuration.entry.main = [
  `webpack-hot-middleware/client?path=http://${host}:${port}/__webpack_hmr`,
  configuration.entry.main
]

// network path for static files: fetch all statics from webpack development server
configuration.output.publicPath = `http://${host}:${port}${configuration.output.publicPath}`

// Add React Hot Module Replacement plugin to `babel-loader`

const javascript_loader = configuration.module.loaders.filter(loader => {
  return loader.test.toString() === /\.js$/.toString()
})[0]

javascript_loader.query = javascript_loader.query || {}

javascript_loader.query.plugins = javascript_loader.query.plugins || []

javascript_loader.query.plugins = javascript_loader.query.plugins.concat([[
  'react-transform', {
    transforms: [{
        transform : 'react-transform-catch-errors',
        imports   : ['react', 'redbox-react']
      },
      {
        transform : 'react-transform-hmr',
        imports   : ['react'],
        locals    : ['module']
      }]
  }
]])

export default configuration
