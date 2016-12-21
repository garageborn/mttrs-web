import React from 'react'
import Item from './item'
import styles from './style.css'

const Placeholder = () => {
  return (
    <div className={styles.placeholder}>
      <div className={styles.wrapper}>
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}

export default Placeholder
