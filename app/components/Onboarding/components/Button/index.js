import React, { PropTypes } from 'react'
import classNames from 'classnames'
import styles from './styles.css'
import arrowLeft from './assets/arrowLeft.svg'
import arrowRight from './assets/arrowRight.svg'
import check from './assets/check.svg'

let images = {
  left: arrowLeft,
  right: arrowRight,
  check: check
}

const Button = ({ type, onClick }) => {
  const classes = classNames({
    [styles.container]: true,
    [styles.check]: type === 'check'
  })
  return (
    <div className={classes} onClick={onClick}>
      <img src={images[type]} alt='' />
    </div>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
