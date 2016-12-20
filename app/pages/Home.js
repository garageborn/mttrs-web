import React, { Component } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import Layout from './Layout'
import Header from '../components/Header'
import TimelineContainer from '../containers/TimelineContainer'

const messages = defineMessages({
  pageTitle: { id: 'home.pageTitle' },
  pageDescription: { id: 'home.pageDescription' }
})

class Home extends Component {
  render () {
    return (
      <Layout {...this.meta()}>
        <Header />
        <TimelineContainer />
      </Layout>
    )
  }

  meta () {
    const { formatMessage } = this.props.intl

    return {
      title: formatMessage(messages.pageTitle),
      description: formatMessage(messages.pageDescription) // todo
    }
  }
}

export default injectIntl(Home)
