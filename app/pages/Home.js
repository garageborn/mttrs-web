import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import Helmet from 'react-helmet'
import { injectIntl, defineMessages } from 'react-intl'
import Header from '../components/Header'
import TimelineContainer from '../containers/TimelineContainer'
import CloseModal from '../components/CloseModal'
import { MODAL_STYLES } from '../constants/ModalStyles'

const messages = defineMessages({
  pageTitle: { id: 'home.pageTitle' },
  pageDescription: { id: 'home.pageDescription' }
})

class Home extends Component {
  render () {
    const {UIReducer, dispatch} = this.props
    return (
      <div>
        <Helmet {...this.helmet()} />
        <Header />
        <TimelineContainer />
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
    const {formatMessage} = this.props.intl

    return {
      title: formatMessage(messages.pageTitle),
      meta: [{name: 'description', content: formatMessage(messages.pageDescription)}] // todo
    }
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
