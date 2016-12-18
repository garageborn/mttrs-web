var path = require('path')
var webpack = require('webpack')

var cssnext = require('postcss-cssnext')
var lost = require('lost')
var precss = require('precss')
var mqpacker = require('css-mqpacker')
var nested = require('postcss-nested')
var atImport = require('postcss-import')
var fontMagician = require('postcss-font-magician')

// project folder
var Root = path.resolve(__dirname, '..')

var configuration = {
  // resolve all relative paths from the project root folder
  context: Root,

  // https://webpack.github.io/docs/multiple-entry-points.html
  entry: {
    main: './app/application.entry.js'
  },

  output: {
    // filesystem path for static files
    path: path.resolve(Root, 'build/assets'),

    // network path for static files
    publicPath: '/assets/',

    // file name pattern for entry scripts
    filename: '[name].[hash].js',

    // file name pattern for chunk scripts
    chunkFilename: '[name].[hash].js'
  },

  module: {
    loaders:
    [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        // include: [path.resolve(Root, 'code')],
        // exclude: path.resolve(Root, 'node_modules'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders:
        [
          'style-loader',
          'css-loader?modules&importLoaders=2&sourceMap',
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpg|png|ico)$/,
        loaders:
        [
          'url-loader?limit=1' // Any png-image or woff-font below or equal to 10K will be converted to inline base64 instead
        ]
      }
    ]
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
  },

  plugins: []
}

module.exports = configuration
