import React, { Component } from 'react'
import Header from '../components/Header'
import TimelineContainer from '../containers/TimelineContainer'
import Helmet from 'react-helmet'
import { injectIntl, defineMessages } from 'react-intl'

const messages = defineMessages({
  pageTitle: { id: 'home.pageTitle' },
  pageDescription: { id: 'home.pageDescription' }
})

class Home extends Component {
  render () {
    return (
      <div>
        <Helmet {...this.helmet()} />
        <Header />
        <TimelineContainer />
      </div>
    )
  }

  helmet () {
    const {formatMessage} = this.props.intl

    return {
      title: formatMessage(messages.pageTitle),
      meta: [{name: 'description', content: formatMessage(messages.pageDescription)}] // todo
    }
  }
}

export default injectIntl(Home)
