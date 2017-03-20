import React, { PropTypes } from 'react'
import styles from './styles.css'

const Title = ({ children }) => (
  <h1 className={styles.text}>
    {children}
  </h1>
)

Title.propTypes = {
}

export default Title
