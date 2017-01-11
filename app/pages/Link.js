import React, { Component, PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import withQuery from './Link.gql'
import Layout from './Layout'

const messages = defineMessages({
  pageTitle: { id: 'link.pageTitle' },
  pageDescription: { id: 'link.pageDescription' }
})

class Link extends Component {
  componentWillMount () {
    if (_server_) return
    this.props.createLinkAccess().then(({ data }) => {
      this.redirectTo(data.createLinkAccess.link.url)
    }).catch((error) => {
      Raven.captureException(error)
      this.redirectTo(this.data.link.url)
    })
  }

  render () {
    return (
      <Layout {...this.meta()} />
    )
  }

  meta () {
    const { formatMessage } = this.props.intl
    const { title } = this.props.data.link

    return {
      title: formatMessage(messages.pageTitle, { title }),
      description: formatMessage(messages.pageDescription, { title })
    }
  }

  redirectTo(url) {
    window.location.href = url
  }
}

Link.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.function
  })
}

const LinkWithIntl = injectIntl(Link)
export default withQuery(LinkWithIntl)
