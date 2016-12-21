import React from 'react'
import styles from './style.css'

const Item = () => {
  return (
    <div className={styles.story}>
      <aside className={styles.aside}>
        <div className={styles.image} />
      </aside>
      <div className={styles.info}>
        <div className={styles.title} />
        <div className={styles.publisher} />
      </div>
    </div>
  )
}

export default Item
