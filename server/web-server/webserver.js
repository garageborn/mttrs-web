import path from 'path'
import webservice from 'web-service'

const web = webservice({ log })

// serve static files
web.files('/assets', path.join(Root, 'build', 'assets'))

// if it's not a static file url:
// Proxy all the rest requests to Webpage rendering server
const webpageHost = configuration.webpage_server.http.host
const webpagePort = configuration.webpage_server.http.port
web.proxy(`http://${webpageHost}:${webpagePort}`, { name: 'Page rendering service' })

// raise http server
const webserverHost = configuration.web_server.http.host
const webserverPort = configuration.web_server.http.port
web.listen(configuration.web_server.http.port).then(() => {
  log.info('Web server is listening')
  log.info(`Now go to http://${webserverHost}:${webserverPort}`)
},
error => {
  log.error(error)
})
