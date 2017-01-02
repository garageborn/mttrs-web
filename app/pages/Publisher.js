import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Layout from './Layout'
import { injectIntl, defineMessages } from 'react-intl'
import Header from '../components/Header'
import TimelineContainer from '../containers/TimelineContainer'
import withQuery from './Publisher.gql'
import { UIActions } from '../actions/index'

const messages = defineMessages({
  pageTitle: { id: 'publisher.pageTitle' }
})

class Publisher extends Component {
  componentDidMount () {
    this.updateSection('publisher', this.props)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.slug !== this.props.slug) {
      this.updateSection('publisher', nextProps)
    }
  }

  render () {
    const queryVariables = { publisherSlug: this.props.slug }
    return (
      <Layout {...this.meta()}>
        <Header />
        <TimelineContainer queryVariables={queryVariables} />
      </Layout>
    )
  }

  updateSection (name, props) {
    const section = {
      name: name,
      model: {
        slug: props.slug
      }
    }
    this.props.dispatch(UIActions.updateSection(section))
  }

  meta () {
    const { publisher, loading } = this.props.data
    const { formatMessage } = this.props.intl
    if (loading) return {}

    return {
      title: formatMessage(messages.pageTitle, { name: publisher.name }),
      description: publisher.name // todo
    }
  }
}

Publisher.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.function
  }),
  slug: PropTypes.string.isRequired,
  data: PropTypes.shape({
    publisher: PropTypes.object,
    loading: PropTypes.bool
  }),
  updateSection: PropTypes.func,
  dispatch: PropTypes.func.isRequired
}

let mapStateToProps = (state, ownProps) => {
  return {
    slug: ownProps.route.slug
  }
}

const PublisherWithIntl = injectIntl(Publisher)
const PublisherWithRedux = connect(mapStateToProps)(PublisherWithIntl)
export default withQuery(PublisherWithRedux)
