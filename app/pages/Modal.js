import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ModalContainer from '../containers/ModalContainer'
import Onboarding from '../components/Onboarding'
import { UIActions } from '../actions/index'

class ModalWrapper extends Component {
  componentWillReceiveProps (nextProps) {
    // TEMPORARY
    // this.handleOnboarding(nextProps)
  }

  render () {
    return (
      <div>
        {this.props.children}
        <ModalContainer showModal={this.props.showModal} />
      </div>
    )
  }

  handleOnboarding (nextProps) {
    if (!nextProps.showOnboarding) return
    if (this.props.showOnboarding === nextProps.showOnboarding) return
    return (
      this.props.dispatch(
        UIActions.openModal(
          'onboarding',
          React.createElement(Onboarding)
        )
      )
    )
  }
}

ModalWrapper.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func,
  showOnboarding: PropTypes.bool,
  showModal: PropTypes.bool
}

ModalWrapper.defaultProps = {
  showModal: true
}

const mapStateToprops = state => ({
  showOnboarding: state.UIReducer.showOnboarding
})

export default connect(mapStateToprops)(ModalWrapper)
