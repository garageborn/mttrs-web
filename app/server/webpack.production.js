const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssnext = require('postcss-cssnext')
const lost = require('lost')
const precss = require('precss')
const mqpacker = require('css-mqpacker')
const nested = require('postcss-nested')
const atImport = require('postcss-import')
const fontMagician = require('postcss-font-magician')

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
})

module.exports = {
  devtool: 'source-map',
  entry: [
    path.resolve('index.production.js'),
    path.resolve('app//styles/app.css')
  ],
  output: {
    path: path.join(__dirname, '../../web', 'public', 'static'),
    publicPath: '/static/',
    filename: 'app.js',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    devFlagPlugin,
    new ExtractTextPlugin('app.css', { allChunks: true }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: { warnings: false }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'MTTRS_API_URL': JSON.stringify(process.env.MTTRS_API_URL),
        'CLOUDINARY_CLOUD_NAME': JSON.stringify(process.env.CLOUDINARY_CLOUD_NAME),
        'MTTRS_FRONTEND_SENTRY_PUBLIC_DSN': JSON.stringify(process.env.MTTRS_FRONTEND_SENTRY_PUBLIC_DSN)
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css-loader?modules&localIdentName=[hash:base64:4]!postcss-loader')
      },
      { test: /\.png$/, loader: 'file-loader' },
      { test: /\.svg$/, loader: 'file-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  resolve: {
    alias: {
      assets: path.resolve('app//assets'),
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
