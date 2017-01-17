import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { publisherPath } from '../../utils/RoutesHelper'
import PublisherIcon from '../PublisherIcon'
import styles from './styles.css'

const PublishersListItem = ({publisher, onSelectPublisher}) => {
  return (
    <li>
      <Link
        onClick={onSelectPublisher}
        to={publisherPath(publisher.slug)}
        key={publisher.id}
        className={styles.publisher}
      >
        <PublisherIcon publisher={publisher} size='big' />
        {publisher.name}
      </Link>
    </li>
  )
}

PublishersListItem.propTypes = {
  publisher: PropTypes.object.isRequired,
  onSelectPublisher: PropTypes.func.isRequired
}

export default PublishersListItem
