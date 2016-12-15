import React, {Component} from 'react'
import { connect } from 'react-redux'
import HeaderContainer from './HeaderContainer'
import TimelineContainer from './TimelineContainer'
import IntlProvider from '../config/IntlProvider'

class Root extends Component {
  render() {

    return (
      <IntlProvider>
        <div>
          <HeaderContainer />
          <TimelineContainer section={this.props.section} />
        </div>
      </IntlProvider>
    )
  }
}


let mapStateToProps = (state, ownProps) => {
  return {
    section: ownProps.route.section
  }
}

export default connect(mapStateToProps)(Root)
