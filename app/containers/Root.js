import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import Header from '../components/Header'
import TimelineContainer from './TimelineContainer'
import IntlProvider from '../config/IntlProvider'

class Root extends Component {
  render () {
    const {UIReducer} = this.props
    return (
      <IntlProvider>
        <div>
          <Header />
          <TimelineContainer section={this.props.section} />
          <Modal isOpen={UIReducer.modal.isOpen}>oi</Modal>
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
    menu: PropTypes.shape({
      isOpen: PropTypes.bool.isRequired
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
