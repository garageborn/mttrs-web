import React, { PropTypes } from 'react'
import classNames from 'classnames'
import styles from './styles.css'

const Dots = ({ active }) => {
  let classes = classNames({
    [styles.container]: true,
    [styles.active]: active
  })

  return (
    <div className={classes} />
  )
}

Dots.propTypes = {
  active: PropTypes.bool.isRequired
}

export default Dots
