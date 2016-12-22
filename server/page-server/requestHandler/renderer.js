import React from 'react'
import ReactDOMServer from 'react-dom/server'
import 'isomorphic-fetch'
import {renderToStringWithData} from 'react-apollo/server'
import htmlOptions from './htmlOptions'
import Html from '../Html'

class RenderEngine {
  constructor ({config, parameters}) {
    this.config = config
    this.parameters = parameters
  }

  run (renderProps) {
    const component = this.config.wrapper.run({renderProps})

    return renderToStringWithData(component).then((content) => {
      return this.renderFullPage(content)
    })
  }

  renderFullPage (content) {
    const props = Object.assign(
      {},
      htmlOptions(this.parameters),
      { store: this.config.settings.store, body: content }
    )
    return ReactDOMServer.renderToStaticMarkup(<Html {...props} />)
  }
}

export default RenderEngine
