import React, { PropTypes } from 'react'
import styles from './styles.css'

const Caption = ({ children }) => (
  <div className={styles.container}>
    <p className={styles.text}>
      {children}
    </p>
  </div>
)

Caption.propTypes = {
  children: PropTypes.string.isRequired
}

export default Caption
