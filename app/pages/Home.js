import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { injectIntl, defineMessages } from 'react-intl'
import Layout from './Layout'
import Modal from './Modal'
import TimelineContainer from '../containers/TimelineContainer'
import CloseModal from '../components/CloseModal'
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
      <Modal>
        <Layout {...this.helmet()}>
          <TimelineContainer type='home' queryVariables={queryVariables} />
        </Layout>
      </Modal>
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
