import React, { PropTypes } from 'react'
import MenuPublishersItem from '../MenuPublishersItem'
import styles from './styles.css'

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
