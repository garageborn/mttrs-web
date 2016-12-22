import React, {Component, PropTypes} from 'react'

export default function injectSettings (WrappedComponent) {
  class InjectSettings extends Component {
    render () {
      return (
        <WrappedComponent
          {...this.props}
          {...{settings: this.context.settings}}
        />
      )
    }
  }

  InjectSettings.contextTypes = {
    settings: PropTypes.shape({
      language: PropTypes.string,
      tenant: PropTypes.string,
      timezone: PropTypes.string
    })
  }

  return InjectSettings
}
