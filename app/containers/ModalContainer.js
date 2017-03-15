import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import CloseModal from '../components/CloseModal'
import modalStyles from '../styles/modal.css'
import { UIActions } from '../actions/index'

class ModalContainer extends Component {
  constructor () {
    super()
    this.closeModal = this.closeModal.bind(this)
  }

  render () {
    if (!this.props.showModal) return null
    const { UIReducer } = this.props
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
    const { UIReducer } = this.props

    if (!UIReducer.modal.isOpen) return
    return <CloseModal shoudldShowButton={UIReducer.modal.isOpen} closeModal={this.closeModal} />
  }

  closeModal () {
    this.props.dispatch(UIActions.closeModal())
  }
}

ModalContainer.propTypes = {
  UIReducer: PropTypes.shape({
    modal: PropTypes.shape({
      isOpen: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired
}

let mapStateToProps = (state) => {
  return {
    UIReducer: state.UIReducer
  }
}

export default connect(mapStateToProps)(ModalContainer)
