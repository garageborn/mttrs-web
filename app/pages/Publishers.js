import React, { Component, PropTypes } from 'react'
import Layout from './Layout'
import { injectIntl, defineMessages } from 'react-intl'
import Header from '../components/Header'
import PublishersListContainer from '../containers/PublishersListContainer'

const messages = defineMessages({
  pageTitle: { id: 'publisher.pageTitle' }
})

class Publishers extends Component {
  componentDidMount () {
    this.updateSection(this.props)
  }

  // componentWillReceiveProps (nextProps) {
  //   let loadingWillChange = this.props.data.loading !== nextProps.data.loading
  //   let nextWillNotBeLoading = nextProps.data.loading === false
  //   if (loadingWillChange && nextWillNotBeLoading) {
  //     this.updateSection(nextProps)
  //   }
  // }

  render () {
    return (
      <Layout {...this.meta()}>
        <Header />
        <PublishersListContainer type='publisherPage' />
      </Layout>
    )
  }

  updateSection (props) {
    // if (props.data.loading) return
    // let section = {
    //   type: 'publisher',
    //   model: props.data.publisher
    // }
    // this.props.dispatch(UIActions.updateSection(section))
  }

  meta () {
    const { formatMessage } = this.props.intl

    return {
      title: formatMessage(messages.pageTitle, { name: 'Publishers' })
    }
  }
}

Publishers.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.function
  }),
  data: PropTypes.shape({
    publisher: PropTypes.object,
    loading: PropTypes.bool
  })
}


const PublishersWithIntl = injectIntl(Publishers)
export default PublishersWithIntl
