import React, { Component, PropTypes } from 'react'
import withMutation from './index.gql'
import PublisherSuggestion from '../../components/PublisherSuggestion'

class PublisherSuggestionContainer extends Component {
  constructor () {
    super()

    this.state = {
      status: ''
    }

    this.sendSuggestion = this.sendSuggestion.bind(this)
  }

  render () {
    return (
      <PublisherSuggestion
        publisher={this.props.publisher}
        sendSuggestion={this.sendSuggestion}
        status={this.state.status}
      />
    )
  }

  sendSuggestion () {
    this.props.createPublisherSuggestion(this.props.publisher)
      .then(d => this.setState({ status: 'success' }))
      .catch(e => this.setState({ status: 'error' }))
  }
}

PublisherSuggestionContainer.propTypes = {
  createPublisherSuggestion: PropTypes.func.isRequired,
  publisher: PropTypes.string.isRequired
}

export default withMutation(PublisherSuggestionContainer)
