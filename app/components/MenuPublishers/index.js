import React, { PropTypes } from 'react'
import styles from './styles.css'
import MenuPublishersItem from '../MenuPublishersItem'

const MenuPublishers = ({publishers}) => {
  return (
    <div className={styles.container}>
      {publishers.map((publisher) => <MenuPublishersItem key={publisher.id} publisher={publisher} />)}
    </div>

  )
}

MenuPublishers.propTypes = {
  publishers: PropTypes.array.isRequired
}

export default MenuPublishers
