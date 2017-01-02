import React from 'react'
import styles from './styles.css'

const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <div>Loading...</div>
      </div>
    </div>
  )
}
export default Spinner
