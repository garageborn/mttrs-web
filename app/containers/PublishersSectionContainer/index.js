import React, { Component, PropTypes } from 'react'
import _isNull from 'lodash/isNull'
import withQuery from './index.gql'
import Loading from '../../components/Loading'
import PublishersSection from '../../components/PublishersSection'

class PublishersSectionContainer extends Component {
  constructor () {
    super()

    this.handleSearchTerm = this.handleSearchTerm.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.deactivateSearch = this.deactivateSearch.bind(this)

    this.state = {
      isSearchActive: false,
      query: ''
    }
  }

  componentWillMount () {
    if (this.props.type === 'publishers') {
      this.setState({
        isSearchActive: true
      })
    }
  }

  handleFocus () {
    return this.setState({
      isSearchActive: true
    })
  }

  handleSearchTerm (e) {
    this.setState({
      query: e.target.value
    })
  }

  deactivateSearch () {
    return this.setState({
      query: '',
      isSearchActive: false
    })
  }

  matchDisplayName (publisher, queryMatcher) {
    if (_isNull(publisher.display_name)) return
    return publisher.display_name.match(queryMatcher)
  }

  get filteredPublishers () {
    const { publishers } = this.props.data

    if (!this.state.isSearchActive) return publishers

    const queryMatcher = new RegExp(this.state.query, 'i')
    let filteredPublishers = publishers.filter(publisher => {
      return this.matchDisplayName(publisher, queryMatcher) ||
        publisher.name.match(queryMatcher) ||
        publisher.slug.match(queryMatcher)
    })

    return filteredPublishers
  }

  render () {
    if (this.props.data.loading) return <Loading />

    return (
      <PublishersSection
        type={this.props.type}
        query={this.state.query}
        loading={this.props.data.loading}
        publishers={this.filteredPublishers}
        handleFocus={this.handleFocus}
        isSearchActive={this.state.isSearchActive}
        handleSearchTerm={this.handleSearchTerm}
        deactivateSearch={this.deactivateSearch}
      />
    )
  }
}

PublishersSectionContainer.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object.isRequired
}

export default withQuery(PublishersSectionContainer)
