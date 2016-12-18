import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
require('../styles/app.css')
import Header from '../components/Header'
import TimelineContainer from './TimelineContainer'
import IntlProvider from '../config/IntlProvider'

class Root extends Component {
  render () {
    return (
      <IntlProvider>
        <Header />
      </IntlProvider>
    )

    // return (
    //   <IntlProvider>
    //     <div>
    //       <Header />
    //       <TimelineContainer section={this.props.section} />
    //     </div>
    //   </IntlProvider>
    // )
  }
}

Root.propTypes = {
  section: PropTypes.shape({
    type: PropTypes.string.isRequired,
    model: PropTypes.object.isRequired
  })
}

let mapStateToProps = (state, ownProps) => {
  return {
    section: ownProps.route.section
  }
}

export default connect(mapStateToProps)(Root)
