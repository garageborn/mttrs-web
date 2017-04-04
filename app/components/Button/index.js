import React, { PropTypes } from 'react'
import styles from './styles.css'

const Button = ({ onClick, children, skin }) => (
  <button onClick={onClick} className={styles.button} style={skin}>
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  skin: PropTypes.object
}

export default Button
