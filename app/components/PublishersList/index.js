import React, { Component, PropTypes } from 'react'
import PublishersListItem from '../PublishersListItem'
import styles from './styles.css'

class PublishersList extends Component {

  renderPublishers () {
    const { publishers } = this.props
    return publishers.map((publisher) =>
      <PublishersListItem
        key={publisher.id}
        publisher={publisher}
        onSelectPublisher={this.props.deactivateSearch}
      />
    )
  }

  render () {
    return (
      <ul className={styles.publishers}>
        {this.renderPublishers()}
      </ul>
    )
  }
}

PublishersList.propTypes = {
  publishers: PropTypes.array.isRequired,
  deactivateSearch: PropTypes.func.isRequired
}

export default PublishersList
