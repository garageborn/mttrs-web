import React, { PropTypes } from 'react'
import styles from './styles.css'

const Button = ({ onClick, children, textColor, backgroundColor }) => (
  <button onClick={onClick} className={styles.button} style={{ color: textColor, backgroundColor }}>
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string
}

export default Button
