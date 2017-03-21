import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import classNames from 'classnames'
import CloseModal from '../components/CloseModal'
import styles from '../styles/modal.css'
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
          className={this.classNames}
          overlayClassName={styles.overlay}
          onRequestClose={this.closeModal}
        >
          {UIReducer.modal.content}
        </Modal>
        {this.renderCloseButton()}
      </div>
    )
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

    console.log(UIReducer.modal.type)

    return (
      <CloseModal
        shoudldShowButton={UIReducer.modal.isOpen}
        closeModal={this.closeModal}
        type={UIReducer.modal.type}
      />
    )
  }

  closeModal () {
    this.props.dispatch(UIActions.closeModal())
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
