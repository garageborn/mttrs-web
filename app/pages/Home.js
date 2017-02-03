import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { injectIntl, defineMessages } from 'react-intl'
import Layout from './Layout'
import Header from '../components/Header'
import TimelineContainer from '../containers/TimelineContainer'
import CloseModal from '../components/CloseModal'
import modalStyles from '../styles/modal.css'
import { UIActions } from '../actions/index'
import LogoSocial from '../assets/social.png'

const messages = defineMessages({
  pageTitle: { id: 'home.pageTitle' },
  pageDescription: { id: 'home.pageDescription' }
})

class Home extends Component {
  constructor () {
    super()
    this.closeModal = this.closeModal.bind(this)
  }

  componentWillMount () {
    const section = { type: 'home' }
    this.props.dispatch(UIActions.updateSection(section))
  }

  render () {
    const queryVariables = { type: 'home' }
    return (
      <Layout {...this.helmet()}>
        <Header />
        <TimelineContainer type='home' queryVariables={queryVariables} />
        {this.renderModal()}
      </Layout>
    )
  }

  helmet () {
    const { formatMessage } = this.props.intl

    const formattedMessage = formatMessage(messages.pageTitle)
    const formattedDescription = formatMessage(messages.pageDescription)

    return {
      title: formattedMessage,
      description: formattedDescription,
      metas: [
        { property: 'og:title', content: formattedMessage },
        { property: 'og:description', content: formattedDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: LogoSocial },
        { property: 'og:site', content: 'Mttrs' }
      ]
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
