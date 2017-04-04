/* eslint-disable react/jsx-no-bind */
import React, { Component, PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import _isNull from 'lodash/isNull'
import PublishersList from '../PublishersList'
import PublishersSearch from '../PublishersSearch'
import PublisherSuggestionContainer from '../../containers/PublisherSuggestionContainer'
import styles from './styles.css'

const messages = defineMessages({
  loading: { id: 'loading' },
  searchPlaceholder: { id: 'search.placeholder' }
})

class PublishersSection extends Component {
  constructor () {
    super()
    this.handleSearchTerm = this.handleSearchTerm.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.deactivateSearch = this.deactivateSearch.bind(this)
    this.state = {
      filteredPublishers: [],
      isSearchActive: false,
      query: ''
    }
  }

  componentWillMount () {
    this.filteredPublishers()
    if (this.props.type === 'publishers') {
      this.setState({
        isSearchActive: true
      })
    }
  }

  componentWillUpdate (nextProps, nextState) {
    if (this.state.query !== nextState.query) {
      this.filteredPublishers()
    }
  }

  renderView () {
    if (!this.state.filteredPublishers.length) return this.renderSuggestionView()

    return this.renderPublishersList()
  }

  renderSuggestionView () {
    return (
      <PublisherSuggestionContainer
        publisher={this.state.query}
        onSuccessBack={() => window.location.reload()}
      />
    )
  }

  render () {
    if (this.props.loading) return this.loading

    return (
      <div className={styles.container}>
        <div className={styles.search}>
          {this.renderSearchDisclaimer()}
          <PublishersSearch
            isActive={this.state.isSearchActive}
            handleFocus={this.handleFocus}
            deactivateSearch={this.deactivateSearch}
            handleSearchTerm={this.handleSearchTerm}
            fromPublishersPage={this.props.type === 'publishers'}
          />
        </div>
        {this.renderView()}
      </div>
    )
  }

  get loading () {
    const { intl } = this.props
    return (
      <div className={styles.loading}>{intl.formatMessage(messages.loading)}</div>
    )
  }

  handleFocus () {
    return this.setState({
      isSearchActive: true
    })
  }

  deactivateSearch () {
    return this.setState({
      query: '',
      isSearchActive: false
    })
  }

  renderSearchDisclaimer () {
    const { intl } = this.props
    return <p className={styles.disclaimer}>{intl.formatMessage(messages.searchPlaceholder)}</p>
  }

  matchDisplayName (publisher, queryMatcher) {
    if (_isNull(publisher.display_name)) return
    return publisher.display_name.match(queryMatcher)
  }

  filteredPublishers () {
    const { publishers } = this.props
    const queryMatcher = new RegExp(this.state.query, 'i')
    let filteredPublishers = publishers.filter(publisher => {
      return this.matchDisplayName(publisher, queryMatcher) ||
        publisher.name.match(queryMatcher) ||
        publisher.slug.match(queryMatcher)
    })

    return this.setState({ filteredPublishers })
  }

  renderPublishersList () {
    if (!this.state.isSearchActive) return

    return (
      <PublishersList
        publishers={this.state.filteredPublishers}
        deactivateSearch={this.deactivateSearch}
      />
    )
  }

  handleSearchTerm (e) {
    this.setState({
      query: e.target.value
    })
  }
}

PublishersSection.propTypes = {
  type: PropTypes.string,
  publishers: PropTypes.array.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  loading: PropTypes.bool.isRequired
}

export default injectIntl(PublishersSection)