import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Layout from './Layout'
import Modal from './Modal'
import { injectIntl, defineMessages } from 'react-intl'
import CurrentPublisher from '../components/CurrentPublisher'
import PublishersSectionContainer from '../containers/PublishersSectionContainer'
import TimelineContainer from '../containers/TimelineContainer'
import withQuery from './Publisher.gql'
import { UIActions } from '../actions/index'
import LogoSocial from '../assets/social.png'

const messages = defineMessages({
  pageTitle: { id: 'publisher.pageTitle' }
})

class Publisher extends Component {
  componentDidMount () {
    this.updateSection(this.props)
  }

  componentWillReceiveProps (nextProps) {
    let loadingWillChange = this.props.data.loading !== nextProps.data.loading
    let nextWillNotBeLoading = nextProps.data.loading === false
    if (loadingWillChange && nextWillNotBeLoading) {
      this.updateSection(nextProps)
    }
  }

  render () {
    const queryVariables = { publisherSlug: this.props.slug, type: 'publisher' }
    return (
      <Layout {...this.helmet()}>
        <PublishersSectionContainer />
        <CurrentPublisher publisher={this.props.data.publisher} />
        <TimelineContainer type='publisher' queryVariables={queryVariables} />
        <Modal />
      </Layout>
    )
  }

  updateSection (props) {
    if (props.data.loading) return
    let section = {
      type: 'publisher',
      model: props.data.publisher
    }
    this.props.dispatch(UIActions.updateSection(section))
  }

  helmet () {
    const { publisher, loading } = this.props.data
    const { formatMessage } = this.props.intl

    if (!publisher || loading) return {}

    const formattedMessage = formatMessage(messages.pageTitle, { name: publisher.name })
    const formattedDescription = publisher.name

    return {
      title: formattedMessage,
      description: formattedDescription,
      metas: [
        { property: 'og:title', content: formattedMessage },
        { property: 'og:description', content: formattedDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: LogoSocial },
        { property: 'og:site', content: 'Matters' }
      ]
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
