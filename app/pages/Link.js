import React, { Component, PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { connect } from 'react-redux'
import withQuery from './Link.gql'
import Layout from './Layout'
import { StorageActions } from '../actions/index'
import LoadingRequestLink from '../components/LoadingRequestLink'

const messages = defineMessages({
  pageTitle: { id: 'link.pageTitle' },
  pageDescription: { id: 'link.pageDescription' }
})

class Link extends Component {
  componentWillMount () {
    this.createAccess()
    this.addVisitedStory()
  }

  render () {
    const renderOptions = { showHeader: false, showModal: false, showMenu: false }
    return (
      <Layout {...this.helmet()} {...renderOptions}>
        <LoadingRequestLink />
      </Layout>
    )
  }

  helmet () {
    const { formatMessage } = this.props.intl
    const { link } = this.props.data

    const formattedMessage = formatMessage(messages.pageTitle, { title: link.title })
    const formattedDescription = formatMessage(messages.pageDescription, { title: link.title })

    return {
      title: formattedMessage,
      description: link.story.summary || formattedDescription,
      metas: [
        { property: 'og:title', content: formattedMessage },
        { property: 'og:description', content: link.story.summary || formattedDescription },
        { property: 'og:type', content: 'article' },
        { property: 'og:image', content: link.image_source_url },
        { property: 'og:site', content: 'Mttrs' },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:site', content: '@mttrs_app' },
        { property: 'twitter:title', content: formattedMessage },
        { property: 'twitter:image', content: link.image_source_url },
        { property: 'twitter:image:alt', content: formattedMessage },
        { property: 'twitter:description', content: link.story.summary || formattedDescription }
      ]
    }
  }

  createAccess () {
    if (_server_) return
    this.props.createLinkAccess().then(({ data }) => {
      this.redirectTo(data.createLinkAccess.link.url)
    }).catch((error) => {
      Raven.captureException(error)
      this.redirectTo(this.data.link.url)
    })
  }

  addVisitedStory () {
    if (_server_) return
    const { story } = this.props.data.link

    if (this.hasOpenerAction) {
      let openerDispatch = window.opener.dispatch
      let openerStorageActions = window.opener.StorageActions
      openerDispatch(openerStorageActions.addVisitedStory(story))
    } else {
      this.props.dispatch(StorageActions.addVisitedStory(story))
    }
  }

  get hasOpenerAction () {
    return window.opener && window.opener.dispatch && window.opener.StorageActions
  }

  redirectTo (url) {
    window.location.href = url
  }
}

Link.propTypes = {
  createLinkAccess: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.function
  }),
  data: PropTypes.shape({
    link: PropTypes.shape({
      story: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

const LinkWithIntl = injectIntl(Link)
const LinkWithRedux = connect()(LinkWithIntl)
export default withQuery(LinkWithRedux)
