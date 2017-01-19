import React, { PropTypes } from 'react'
import Item from './item'
import styles from './style.css'

const Placeholder = ({pageType}) => {
  let containerStyles = styles.container
  if (pageType === 'publisher') {
    containerStyles = styles.containerPublisher
  }
  return (
    <div className={containerStyles}>
      <div className={styles.wrapper}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}

Placeholder.propTypes = {
  pageType: PropTypes.string
}

export default Placeholder
