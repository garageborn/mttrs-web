import React, { PropTypes } from 'react'
import classNames from 'classnames'
import styles from './styles.css'

const Summary = ({ children, isVisited }) => {
  let textStyles = classNames({
    [styles.text]: true,
    [styles.isVisited]: isVisited
  })

  return <div className={textStyles}>{children}</div>
}

Summary.propTypes = {
  children: PropTypes.node.isRequired,
  isVisited: PropTypes.bool.isRequired
}

export default Summary
