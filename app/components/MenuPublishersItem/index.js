import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { publisherPath } from '../../utils/RoutesHelper'
import PublisherIcon from '../PublisherIcon'
import styles from './styles.css'

const MenuPublishersItem = ({publisher}) => {
  return (
    <Link to={publisherPath(publisher.slug)} key={publisher.id} className={styles.publisher}>
      <PublisherIcon publisher={publisher} size='small' />
      {publisher.name}
    </Link>
  )
}

MenuPublishersItem.propTypes = {
  publisher: PropTypes.object.isRequired
}

export default MenuPublishersItem
