import React, { Component, PropTypes } from 'react'
import { UIActions } from '../../actions/index'
import styles from './styles.css'

class CloseModal extends Component {
  constructor () {
    super()
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal () {
    this.props.dispatch(UIActions.closeModal())
  }

  render () {
    return (
      <div className={styles.button} onClick={this.closeModal}>✕</div>
    )
  }
}

CloseModal.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default CloseModal
