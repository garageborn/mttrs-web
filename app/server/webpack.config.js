require('babel-core/register')

const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssnext = require('postcss-cssnext')
const lost = require('lost')
const precss = require('precss')
const mqpacker = require('css-mqpacker')
const nested = require('postcss-nested')
const atImport = require('postcss-import')
const fontMagician = require('postcss-font-magician')
const _flattenDeep = require('lodash/flattenDeep')

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
})

let entries = [
  'eventsource-polyfill',
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
  path.resolve('index.web.js'),
  path.resolve('app//styles/app.css'),
  glob.sync('./app/components/**/*.css')
]

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: _flattenDeep(entries),
  output: {
    path: path.join(__dirname, 'public', 'static'),
    publicPath: '/static/',
    filename: 'app.js',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    devFlagPlugin,
    new ExtractTextPlugin('app.css', { allChunks: true })
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style',
        'css?modules&localIdentName=[name]_[local]__[hash:base64:5]!postcss')
      },
      { test: /\.jpe?g$|\.gif$|\.png$|^(?!.*\.inline\.svg$).*\.svg$/, loader: 'file!url' },
      { test: /\.inline.svg$/, loader: 'babel!svg-react' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  resolve: {
    alias: {
      mttrs: path.resolve('./')
    },
    extensions: ['', '.js', '.json', '.css']
  },
  node: {
    fs: 'empty'
  },
  postcss: function (webpack) {
    return [
      atImport,
      precss,
      fontMagician,
      cssnext({ browsers: ['last 2 versions'] }),
      lost,
      nested,
      mqpacker
    ]
  }
}
