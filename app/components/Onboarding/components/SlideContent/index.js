import React, { PropTypes } from 'react'
import styles from './styles.css'

const SlideContent = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
)

SlideContent.propTypes = {
  children: PropTypes.any.isRequired
}

export default SlideContent
