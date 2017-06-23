import path from 'path'

// project folder
const Root = path.resolve(__dirname, '..')

module.exports = {
  // resolve all relative paths from the project root folder
  context: Root,

  // https://webpack.github.io/docs/multiple-entry-points.html
  entry: {
    main: './server/page-server/webserver.js'
  },

  output: {
    // filesystem path for static files
    path: path.resolve(Root, 'build/server'),

    // file name pattern for entry scripts
    filename: '[name].[hash].js',

    // file name pattern for chunk scripts
    chunkFilename: '[name].[hash].js'
  }
}

// module.exports = {
//   server: {
//     input: './server/page-server/webserver.js',

//     output: './build/server/server.js'
//   }
// }
