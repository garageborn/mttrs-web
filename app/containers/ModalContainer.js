import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import classNames from 'classnames'
import CloseModal from '../components/CloseModal'
import { UIActions } from '../actions/index'
import styles from '../styles/modal.css'

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
          className={this.classNames}
          overlayClassName={this.overlayClassNames}
          onRequestClose={this.closeModal}
        >
          <div>
           {UIReducer.modal.content}
          </div>
        </Modal>
        {this.renderCloseButton()}
      </div>
    )
  }

  get overlayClassNames () {
    let { type } = this.props.UIReducer.modal
    return classNames({
      [styles.overlay]: true,
      [styles.onboardingOverlay]: type === 'onboarding'
    })
  }

  get classNames () {
    let { type } = this.props.UIReducer.modal
    return classNames({
      [styles.modal]: true,
      [styles[type]]: true
    })
  }

  renderCloseButton () {
    const { UIReducer } = this.props

    if (!UIReducer.modal.isOpen) return

    return (
      <CloseModal
        shoudldShowButton={UIReducer.modal.isOpen}
        closeModal={this.closeModal}
        type={UIReducer.modal.type}
      />
    )
  }

  closeModal () {
    return this.props.dispatch(UIActions.handleCloseModal())
  }
}

ModalContainer.propTypes = {
  UIReducer: PropTypes.shape({
    modal: PropTypes.shape({
      type: PropTypes.string,
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
