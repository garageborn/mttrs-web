import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { injectIntl, defineMessages } from 'react-intl'
import Modal from 'react-modal'
import Header from '../components/Header'
import TimelineContainer from '../containers/TimelineContainer'
import CloseModal from '../components/CloseModal'
import withQuery from './Publisher.gql'
import { MODAL_STYLES } from '../constants/ModalStyles'

const messages = defineMessages({
  pageTitle: { id: 'publisher.pageTitle' }
})

class Publisher extends Component {
  render () {
    const queryVariables = {publisherSlug: this.props.slug}
    const {UIReducer, dispatch} = this.props
    return (
      <div>
        <Helmet {...this.helmet()} />
        <Header />
        <TimelineContainer queryVariables={queryVariables} />
        <Modal
          isOpen={UIReducer.modal.isOpen}
          contentLabel='Modal'
          style={MODAL_STYLES}
        >
          {UIReducer.modal.content}
          <CloseModal dispatch={dispatch} />
        </Modal>
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

Publisher.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.function
  }),
  UIReducer: PropTypes.shape({
    modal: PropTypes.shape({
      isOpen: PropTypes.bool.isRequired
    })
  }),
  slug: PropTypes.string.isRequired,
  data: PropTypes.shape({
    publisher: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
  }),
  dispatch: PropTypes.func.isRequired
}

let mapStateToProps = (state, ownProps) => {
  return {
    slug: ownProps.route.slug,
    UIReducer: state.UIReducer
  }
}

const PublisherWithIntl = injectIntl(Publisher)
const PublisherWithRedux = connect(mapStateToProps)(PublisherWithIntl)
export default withQuery(PublisherWithRedux)
