var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cssnext = require('postcss-cssnext');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  devtool: 'source-map',
  entry: [
    path.resolve('index.web.production.js'),
    path.resolve('app//styles/app.sass')
  ],
  output: {
    path: path.join(__dirname, '../../web', 'public', 'static'),
    publicPath: '/static/',
    filename: 'app.js',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    devFlagPlugin,
    new ExtractTextPlugin('app.css'),
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader?module!postcss-loader') },
      { test: /\.sass$/, loader: ExtractTextPlugin.extract('css!sass') },
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
    extensions: ['', '.js', '.json']
  },
  node: {
    fs: 'empty'
  },
  postcss: function (webpack) {
    return [
      cssnext({ browsers: ['last 2 versions'] })
    ]
  }
};