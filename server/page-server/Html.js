import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default class Html extends Component {
  render () {
    const {
      assets,
      store,
      head,
      body,
      bodyStart,
      bodyEnd
    } = this.props

    /* Using `dangerouslySetInnerHTML` here to prevent React from escaping the HTML markup */
    let contentElement = <div id='react' dangerouslySetInnerHTML={{ __html: body }} />

    const webpageHead = Helmet.rewind()

    let htmlAttributes = webpageHead.htmlAttributes.toComponent()

    // Fixing `react-helmet` bug here (they've fixed it in `3.2.3`)
    // https://github.com/nfl/react-helmet/issues/158
    if (Array.isArray(htmlAttributes)) {
      // A workaround
      htmlAttributes = {}

      // console.log(`You're gonna see a React warning in the console:` + `\n` +
      //  `"Warning: React.createElement(...): Expected props argument of html to be a plain object".` + `\n` +
      //  `This is not an error and this warning will be fixed in "react-helmet" package` + `\n` +
      //  `https://github.com/nfl/react-helmet/issues/158` + `\n` + `\n` +
      //  `This error happens when there's no page content to render ("content" is undefined in Html.js)`)
    }

    const styleUrl = assets.entry ? assets.styles[assets.entry] : assets.styles
    const javascriptUrl = assets.entry ? assets.javascript[assets.entry] : assets.javascript

    const storeState = store.getState()
    // Remove `redux-router` data from store
    delete storeState.router

    const html = (
      <html {...htmlAttributes} >
        <head>
          {/* webpage title and various meta tags */}
          {webpageHead.meta.toComponent()}
          {webpageHead.title.toComponent()}
          {webpageHead.link.toComponent()}

          {/* (will be done only in production mode
               with webpack extract text plugin)

              mount CSS stylesheets for all entry points
              (should have been "for the current entry point only")

              (currently there is only one entry point: "main";
               and also the "common" chunk) */}

          { assets.entry && assets.style && assets.style.common &&
            <link href={assets.style.common} rel='stylesheet' type='text/css' charSet='UTF-8' />
          }

          {styleUrl && <link href={styleUrl} rel='stylesheet' type='text/css' charSet='UTF-8' />}

          {webpageHead.script.toComponent()}

          {head}
        </head>

        <body itemScope itemType='http://schema.org/WebPage'>
          {/* support adding arbitrary markup to body start */}
          {bodyStart}

          {/* React page content */}
          {/* (most of the possible XSS attack scripts are executed here,
               before the global authentication token variable is set,
               so they're unlikely to even be able to hijack it) */}
          {contentElement}

          {/* support adding arbitrary markup to body end */}
          {bodyEnd}

          {/* Flux store data will be reloaded into the store on the client-side. */}
          {/* Using `dangerouslySetInnerHTML` here to prevent React from escaping "potentially dangerous" characters */}
          {/* At the same time all forward slashes are escaped to prevent XSS attacks.
              https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0#.8dhdig4us */}
          <script
            dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__=JSON.parse(${JSON.stringify(safeJsonStringify(storeState))})`}}
            charSet='UTF-8'
          />

          {/* javascripts */}

          {/* the 'common.js' chunk (see webpack extract commons plugin) */}
          {/* (needs to be included first (by design)) */}
          { (assets.entry && assets.javascript && assets.javascript.common) &&
            <script src={assets.javascript.common} charSet='UTF-8' />
          }

          {/* current application "entry" point javascript
              (currently there is only one entry point: "main") */}
          <script src={javascriptUrl} charSet='UTF-8' />
        </body>
      </html>
    )

    return html
  }
}

Html.propTypes = {
  assets: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  children: PropTypes.node,
  head: PropTypes.node,
  body: PropTypes.string,
  bodyStart: PropTypes.node,
  bodyEnd: PropTypes.node
}

function safeJsonStringify (json) {
  // The default javascript JSON.stringify doesn't escape forward slashes,
  // but it is allowed by the JSON specification, so we manually do it here.
  // (and javascript regular expressions don't support "negative lookbehind"
  //  so it's simply replacing all forward slashes with escaped ones,
  //  but also make sure to not call it twice on the same JSON)
  return JSON.stringify(json).replace(/\//g, '\\/')
}
