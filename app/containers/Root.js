import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import Header from '../components/Header'
import CloseModal from '../components/CloseModal'
import TimelineContainer from './TimelineContainer'
import IntlProvider from '../config/IntlProvider'
import { MODAL_STYLES } from '../constants/ModalStyles'

class Root extends Component {
  render () {
    const {UIReducer, section, dispatch} = this.props
    return (
      <IntlProvider>
        <div>
          <Header />
          <TimelineContainer section={section} />
          <Modal
            isOpen={UIReducer.modal.isOpen}
            style={MODAL_STYLES}
          >
            {UIReducer.modal.content}
            <CloseModal dispatch={dispatch} />
          </Modal>
        </div>
      </IntlProvider>
    )
  }
}

Root.propTypes = {
  section: PropTypes.shape({
    type: PropTypes.string.isRequired,
    model: PropTypes.object.isRequired
  }),
  UIReducer: PropTypes.shape({
    modal: PropTypes.shape({
      isOpen: PropTypes.bool.isRequired,
      type: PropTypes.string.isRequired,
      content: PropTypes.any.isRequired
    })
  })
}

let mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    section: ownProps.route.section,
    UIReducer: state.UIReducer
  }
}

export default connect(mapStateToProps)(Root)
