import React, { Component, PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import _isNull from 'lodash/isNull'
import PublishersListItem from '../PublishersListItem'
import PublishersSearch from '../PublishersSearch'
import styles from './styles.css'

const messages = defineMessages({
  searchPlaceholder: { id: 'search.placeholder' }
})

class PublishersList extends Component {
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

  render () {
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
        {this.renderPublishersList()}
      </div>
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

  renderPublishersList () {
    if (!this.state.isSearchActive) return
    return (
      <ul className={styles.publishers}>
        {this.renderPublishers()}
      </ul>
    )
  }

  matchDisplayName (publisher, queryMatcher) {
    if (_isNull(publisher.display_name)) return
    return publisher.display_name.match(queryMatcher)
  }

  renderPublishers () {
    const { publishers } = this.props
    const queryMatcher = new RegExp(this.state.query, 'i')
    const filteredPublishers = publishers.filter(publisher => {
      return this.matchDisplayName(publisher, queryMatcher) ||
        publisher.name.match(queryMatcher) ||
        publisher.slug.match(queryMatcher)
    })
    return filteredPublishers.map((publisher) => <PublishersListItem onSelectPublisher={this.deactivateSearch} key={publisher.id} publisher={publisher} />)
  }

  handleSearchTerm (e) {
    this.setState({
      query: e.target.value
    })
  }
}

PublishersList.propTypes = {
  type: PropTypes.string,
  publishers: PropTypes.array.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(PublishersList)
