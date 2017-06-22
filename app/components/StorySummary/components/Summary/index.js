import React, { PropTypes } from 'react'
import classNames from 'classnames'
import styles from './styles.css'

const Summary = ({ children }) => {
  let textStyles = classNames({
    [styles.text]: true
  })

  return <div className={textStyles}>{children}</div>
}

Summary.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Summary
