import React, { PropTypes } from 'react'
import styles from './styles.css'

const Button = ({ ...props, children, textColor, backgroundColor }) => (
  <button {...props} className={styles.button} style={{ color: textColor, backgroundColor }}>
    {children}
  </button>
)

Button.propTypes = {
  props: PropTypes.object,
  children: PropTypes.node.isRequired,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string
}

export default Button
