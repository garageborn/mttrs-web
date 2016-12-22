import React, { Component } from 'react'

export default function injectSettings (WrappedComponent) {
  class InjectSettings extends Component {
    render () {
      console.log('-------------------------------InjectSettings')
      console.log('InjectSettings WrappedComponent', WrappedComponent)
      console.log('InjectSettings this.context.settings', this.context.settings)
      return (
        <WrappedComponent
          {...this.props}
          {...{settings: this.context.settings}}
        />
      )
    }
  }

  return InjectSettings
}
