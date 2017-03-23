import React, { PropTypes } from 'react'
import Dot from './components/Dot'
import styles from './styles.css'

const Dots = ({ count, active }) => {
  const renderDots = (count, active) => (
    [...Array(count)].map((value, idx) => (<Dot active={active === idx} />))
  )

  return (
    <div className={styles.container}>
      {renderDots(count, active)}
    </div>
  )
}

Dots.propTypes = {
  count: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired
}

export default Dots
