import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { injectIntl, defineMessages } from 'react-intl'
import Header from '../components/Header'
import TimelineContainer from '../containers/TimelineContainer'
import withQuery from './Publisher.gql'

const messages = defineMessages({
  pageTitle: { id: 'publisher.pageTitle' }
})

class Publisher extends Component {
  render () {
    const queryVariables = {publisherSlug: this.props.slug}
    return (
      <div>
        <Helmet {...this.helmet()} />
        <Header />
        <TimelineContainer queryVariables={queryVariables} />
      </div>
    )
  }

  helmet () {
    const {publisher, loading} = this.props.data
    const {formatMessage} = this.props.intl
    if (loading) return {}

    return {
      title: formatMessage(messages.pageTitle, { name: publisher.name }),
      meta: [{name: 'description', content: publisher.name}] // todo
    }
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    slug: ownProps.route.slug
  }
}

const PublisherWithIntl = injectIntl(Publisher)
const PublisherWithRedux = connect(mapStateToProps)(PublisherWithIntl)
export default withQuery(PublisherWithRedux)
