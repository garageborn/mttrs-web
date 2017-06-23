import path from 'path'
import cssnext from 'postcss-cssnext'
import lost from 'lost'
import precss from 'precss'
import mqpacker from 'css-mqpacker'
import nested from 'postcss-nested'
import atImport from 'postcss-import'
import flexBugsFixes from 'postcss-flexbugs-fixes'
import { properties, mediaQueries } from '../app/utils/variables'

const cssNextConfig = {
  browsers: ['last 2 versions'],
  features: {
    customProperties: { variables: properties },
    customMedia: { extensions: mediaQueries }
  }
}

// project folder
const Root = path.resolve(__dirname, '..')

const configuration = {
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
    noParse: /node_modules\/localforage\/dist\/localforage.js/,
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders:
        [
          'style-loader',
          'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:5]&importLoaders=2&sourceMap',
          'postcss-loader'
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|^(?!.*\.inline\.svg$).*\.svg$/,
        loaders:
        [
          'url-loader?limit=1' // Any png-image or woff-font below or equal to 10K will be converted to inline base64 instead
        ]
      },
      {
        test: /\.inline.svg$/,
        loader: 'babel!svg-react'
      }
    ]
  },

  postcss: function (webpack) {
    return [
      cssnext(cssNextConfig),
      atImport,
      precss,
      lost,
      nested,
      mqpacker,
      flexBugsFixes
    ]
  },

  plugins: []
}

module.exports = configuration
