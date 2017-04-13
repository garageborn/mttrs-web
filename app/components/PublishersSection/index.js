/* eslint-disable react/jsx-no-bind */
import React, { Component, PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import PublishersList from '../PublishersList'
import PublishersSearch from '../PublishersSearch'
import PublisherSuggestionContainer from '../../containers/PublisherSuggestionContainer'
import styles from './styles.css'

const messages = defineMessages({
  searchPlaceholder: { id: 'search.placeholder' }
})

class PublishersSection extends Component {
  renderView () {
    if (!this.props.publishers.length) return this.renderSuggestionView()
    return this.renderPublishersList()
  }

  renderSuggestionView () {
    return (
      <PublisherSuggestionContainer
        publisher={this.props.query}
        onSuccessBack={() => window.location.reload()}
      />
    )
  }

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.search}>
          {this.renderSearchDisclaimer()}
          <PublishersSearch
            isActive={this.props.isSearchActive}
            handleFocus={this.props.handleFocus}
            deactivateSearch={this.props.deactivateSearch}
            handleSearchTerm={this.props.handleSearchTerm}
            fromPublishersPage={this.props.type === 'publishers'}
          />
        </div>
        {this.renderView()}
      </div>
    )
  }

  renderSearchDisclaimer () {
    const { intl } = this.props
    return <p className={styles.disclaimer}>{intl.formatMessage(messages.searchPlaceholder)}</p>
  }

  renderPublishersList () {
    if (!this.props.isSearchActive) return

    return (
      <PublishersList
        publishers={this.props.publishers}
        deactivateSearch={this.props.deactivateSearch}
      />
    )
  }
}

PublishersSection.propTypes = {
  type: PropTypes.string,
  query: PropTypes.string.isRequired,
  publishers: PropTypes.array,
  isSearchActive: PropTypes.bool.isRequired,
  deactivateSearch: PropTypes.func.isRequired,
  handleSearchTerm: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(PublishersSection)
