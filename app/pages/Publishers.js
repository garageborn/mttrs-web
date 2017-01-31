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
      <Layout {...this.helmet()}>
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

  meta () {
    const { formatMessage } = this.props.intl

    return {
      title: formatMessage(messages.pageTitle, { name: 'Publishers' })
    }
  }
}

Publishers.propTypes = {
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.function
  })
}

const PublishersWithIntl = injectIntl(Publishers)
const PublisherWithRedux = connect()(PublishersWithIntl)
export default PublisherWithRedux
