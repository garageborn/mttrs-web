import React, { Component, PropTypes } from 'react'
import PublishersListItem from '../PublishersListItem'
import PublishersSearch from '../PublishersSearch'
import styles from './styles.css'

class PublishersList extends Component {
  constructor () {
    super()
    this.handleSearchTerm = this.handleSearchTerm.bind(this)
    this.state = {
      query: ''
    }
  }

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.search}>
          {this.renderSearchDisclaimer()}
          <PublishersSearch handleSearchTerm={this.handleSearchTerm} />
        </div>
        {this.renderPublishersList()}
      </div>
    )
  }

  renderSearchDisclaimer () {
    if (this.props.type !== 'publisherPage') return
    return <p className={styles.disclaimer}>Search for publishers</p>
  }

  renderPublishersList () {
    if (this.props.type === 'publisherPage' && !this.state.query.length) return
    return (
      <ul className={styles.publishers}>
        {this.renderPublishers()}
      </ul>
    )
  }

  renderPublishers () {
    const { publishers, closeMenu } = this.props
    const queryMatcher = new RegExp(this.state.query, 'i')
    const filteredPublishers = publishers.filter(publisher => publisher.name.match(queryMatcher))
    return filteredPublishers.map((publisher) => <PublishersListItem closeMenu={closeMenu} key={publisher.id} publisher={publisher} />)
  }

  handleSearchTerm (e) {
    this.setState({
      query: e.target.value
    })
  }
}

PublishersList.propTypes = {
  type: PropTypes.object,
  publishers: PropTypes.array.isRequired,
  closeMenu: PropTypes.func.isRequired
}

export default PublishersList
