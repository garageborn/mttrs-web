import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Layout from './Layout'
import { injectIntl, defineMessages } from 'react-intl'
import Header from '../components/Header'
import PublishersListContainer from '../containers/PublishersListContainer'
import { UIActions } from '../actions/index'

const messages = defineMessages({
  pageTitle: { id: 'publisher.pageTitle' }
})

class Publishers extends Component {
  componentDidMount () {
    this.updateSection()
  }

  render () {
    return (
      <Layout {...this.helmet()} route={this.props.route}>
        <Header />
        <PublishersListContainer type='publishers' />
      </Layout>
    )
  }

  updateSection (props) {
    let section = {
      type: 'publishers',
      model: {
        name: 'Publishers'
      }
    }
    this.props.dispatch(UIActions.updateSection(section))
  }

  helmet () {
    const { formatMessage } = this.props.intl

    const formattedMessage = formatMessage(messages.pageTitle, { name: 'Publishers' })

    return {
      title: formattedMessage,
      metas: [
        { property: 'og:title', content: formattedMessage }
      ]
    }
  }
}

Publishers.propTypes = {
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.function
  }),
  route: PropTypes.object.isRequired,
}

const PublishersWithIntl = injectIntl(Publishers)
const PublisherWithRedux = connect()(PublishersWithIntl)
export default PublisherWithRedux
