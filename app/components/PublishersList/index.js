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
          <PublishersSearch handleSearchTerm={this.handleSearchTerm} />
        </div>
        <ul className={styles.publishers}>
          {this.renderPublishers()}
        </ul>
      </div>
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
  publishers: PropTypes.array.isRequired,
  closeMenu: PropTypes.func.isRequired
}

export default PublishersList
