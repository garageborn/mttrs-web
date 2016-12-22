import React, { PropTypes } from 'react'
import styles from './styles.css'

const MenuPublishersItem = ({publisher}) => {
  return (
    <div key={publisher.id} className={styles.container}>
      {publisher.name}
    </div>
  )
}

MenuPublishersItem.propTypes = {
  publisher: PropTypes.object.isRequired
}

export default MenuPublishersItem
