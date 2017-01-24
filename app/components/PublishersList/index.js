import React, { Component, PropTypes } from 'react'
import PublishersListItem from '../PublishersListItem'
import PublishersSearch from '../PublishersSearch'
import styles from './styles.css'

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
    return <p className={styles.disclaimer}>Search for publishers</p>
  }

  renderPublishersList () {
    if (!this.state.isSearchActive) return
    return (
      <ul className={styles.publishers}>
        {this.renderPublishers()}
      </ul>
    )
  }

  renderPublishers () {
    const { publishers } = this.props
    const queryMatcher = new RegExp(this.state.query, 'i')
    const filteredPublishers = publishers.filter(publisher => publisher.name.match(queryMatcher))
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
  publishers: PropTypes.array.isRequired
}

export default PublishersList
