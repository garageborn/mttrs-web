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

const messages = defineMessages({
  pageTitle: { id: 'home.pageTitle' },
  pageDescription: { id: 'home.pageDescription' }
})

class Home extends Component {
  constructor () {
    super()
    this.closeModal = this.closeModal.bind(this)
  }

  render () {
    return (
      <div>
        <Helmet {...this.helmet()} />
        <Header />
        <TimelineContainer />
        {this.renderModal()}
      </div>
    )
  }

  helmet () {
    const {formatMessage} = this.props.intl

    return {
      title: formatMessage(messages.pageTitle),
      meta: [{name: 'description', content: formatMessage(messages.pageDescription)}] // todo
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

Home.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.function
  }),
  UIReducer: PropTypes.shape({
    modal: PropTypes.shape({
      isOpen: PropTypes.bool.isRequired
    })
  }),
  dispatch: PropTypes.func.isRequired
}

let mapStateToProps = (state, ownProps) => {
  return {
    UIReducer: state.UIReducer
  }
}

const HomeWithIntl = injectIntl(Home)

export default connect(mapStateToProps)(HomeWithIntl)
