import React, { PropTypes } from 'react'
import styles from './styles.css'
import arrowLeft from './assets/arrowLeft.svg'
import arrowRight from './assets/arrowRight.svg'

let images = {
  left: arrowLeft,
  right: arrowRight
}

const Button = ({ type, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <img src={images[type]} alt='' />
    </div>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
