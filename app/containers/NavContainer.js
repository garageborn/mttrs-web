import React, { Component, PropTypes } from 'react'
import withQuery from './NavContainer.gql'
import Nav from '../components/Nav'

class NavContainer extends Component {
  render() {
    return (
      <Nav data={this.props.data} />
    )
  }
}

export default withQuery(NavContainer)
