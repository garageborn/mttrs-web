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
    this.updateSection(this.props)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.section.model.slug !== this.props.section.model.slug) {
      this.updateSection(nextProps)
    }
  }

  render () {
    const queryVariables = { publisherSlug: this.props.section.model.slug }
    return (
      <Layout {...this.meta()}>
        <Header />
        <TimelineContainer queryVariables={queryVariables} />
      </Layout>
    )
  }

  updateSection (props) {
    this.props.dispatch(UIActions.updateSection(props.section))
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
  section: PropTypes.shape({
    type: PropTypes.string,
    model: PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string
    })
  }).isRequired,
  data: PropTypes.shape({
    publisher: PropTypes.object,
    loading: PropTypes.bool
  }),
  dispatch: PropTypes.func.isRequired
}

let mapStateToProps = (state, ownProps) => {
  return {
    section: ownProps.route.section
  }
}

const PublisherWithIntl = injectIntl(Publisher)
const PublisherWithRedux = connect(mapStateToProps)(PublisherWithIntl)
export default withQuery(PublisherWithRedux)
