import React from 'react'
import { devtools } from 'universal-webpack'

// Http Urls to javascripts and (optionally) CSS styles
// which will be insterted into the <head/> element of the resulting Html webpage
// (as <script src="..."/> and <link rel="style" href="..."/> respectively)
// Also a website "favicon".
let assets = (parameters) => {
  // Retrieve asset chunk file names
  // (which are output by client side Webpack build)
  const result = Object.assign({}, parameters.chunks())

  // Webpack entry point (can be used for code splitting)
  result.entry = 'main'

  // Return assets
  return result
}

// Will be inserted into server rendered webpage <head/>
// (this `head()` function is optional and is not required)
// (its gonna work with or without this `head()` parameter)
let head = (parameters) => {
  if (_development_) {
    // `devtools` just tampers with CSS styles a bit.
    // It's not required for operation and can be omitted.
    const script = devtools({ ...parameters, entry: 'main' })
    return <script dangerouslySetInnerHTML={{ __html: script }} />
  }
}

let bodyEnd = () => {
  if (_development_) return <div id='dev-tools' />
}

export default function htmlOptions (parameters) {
  return {
    application: {
      host: configuration.web_server.http.host,
      port: configuration.web_server.http.port
    },
    assets: assets(parameters),
    head: head(parameters),
    bodyEnd: bodyEnd()
  }
}
