import React, { PropTypes } from 'react'
import classNames from 'classnames'
import styles from './styles.css'

const Headline = ({ headline, isVisited }) => {
  let headlineStyles = classNames({
    [styles.headline]: true,
    [styles.isVisited]: isVisited
  })

  return (
    <div>
      <p className={headlineStyles}>{headline}</p>
    </div>
  )
}

Headline.propTypes = {
  headline: PropTypes.string.isRequired,
  isVisited: PropTypes.bool.isRequired
}

export default Headline
