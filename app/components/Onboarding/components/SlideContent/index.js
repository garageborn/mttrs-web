import React, { PropTypes } from 'react'
import styles from './styles.css'

const SlideContent = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
)

SlideContent.propTypes = {
}

export default SlideContent
