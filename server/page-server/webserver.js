// express.js
import http from 'http'
import express from 'express'

// react-router
import Log from '../common/log'
const log = Log('webpage renderer')
import requestHandler from './requestHandler'

// The server code must export a function
// (`parameters` may contain some miscellaneous library-specific stuff)
export default function (parameters) {
  // Create HTTP server
  const app = express()
  const server = new http.Server(app)

  // Serve static files
  // app.use(express.static(path.join(__dirname, '..', 'build/assets')))

  // React application rendering
  app.use((request, response) => requestHandler({request, response, parameters}))

  // Start webpage rendering server
  server.listen(configuration.webpage_server.http.port, function (error) {
    if (error) {
      log.error('Webpage rendering server shutdown due to an error', error)
      throw error
    }

    log.info(`Webpage server is listening at http://localhost:${configuration.webpage_server.http.port}`)
  })
}
