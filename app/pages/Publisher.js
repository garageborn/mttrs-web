import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import Helmet from 'react-helmet'
import { injectIntl, defineMessages } from 'react-intl'
import Header from '../components/Header'
import TimelineContainer from '../containers/TimelineContainer'
import CloseModal from '../components/CloseModal'
import modalStyles from '../styles/modal.css'
import { UIActions } from '../actions/index'
import withQuery from './Publisher.gql'
import { MODAL_STYLES } from '../constants/ModalStyles'

const messages = defineMessages({
  pageTitle: { id: 'publisher.pageTitle' }
})

class Publisher extends Component {
  constructor () {
    super()
    this.closeModal = this.closeModal.bind(this)
  }

  render () {
    const queryVariables = {publisherSlug: this.props.slug}
    return (
      <div>
        <Helmet {...this.helmet()} />
        <Header />
        <TimelineContainer queryVariables={queryVariables} />
        {this.renderModal()}
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

  renderModal () {
    const {UIReducer} = this.props
    return (
      <div>
        <Modal
          isOpen={UIReducer.modal.isOpen}
          contentLabel='Modal'
          className={modalStyles.modal}
          overlayClassName={modalStyles.overlay}
          onRequestClose={this.closeModal}
        >
          {UIReducer.modal.content}
        </Modal>
        {this.renderCloseButton()}
      </div>
    )
  }

  renderCloseButton () {
    const {UIReducer} = this.props

    if (!UIReducer.modal.isOpen) return
    return <CloseModal shoudldShowButton={UIReducer.modal.isOpen} closeModal={this.closeModal} />
  }

  closeModal () {
    this.props.dispatch(UIActions.closeModal())
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
