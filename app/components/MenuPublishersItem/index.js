import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { publisherPath } from '../../utils/RoutesHelper'
import PublisherIcon from '../PublisherIcon'
import styles from './styles.css'

const MenuPublishersItem = ({publisher, closeMenu}) => {
  return (
    <Link onClick={closeMenu} to={publisherPath(publisher.slug)} key={publisher.id} className={styles.publisher}>
      <PublisherIcon publisher={publisher} size='big' />
      {publisher.name}
    </Link>
  )
}

MenuPublishersItem.propTypes = {
  publisher: PropTypes.object.isRequired,
  closeMenu: PropTypes.func.isRequired
}

export default MenuPublishersItem
