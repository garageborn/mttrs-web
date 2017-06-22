import React, { PropTypes } from 'react'
import classNames from 'classnames'
import styles from './styles.css'

const Headline = ({ headline }) => {
  let headlineStyles = classNames({
    [styles.headline]: true
  })

  return (
    <div>
      <p className={headlineStyles}>{headline}</p>
    </div>
  )
}

Headline.propTypes = {
  headline: PropTypes.string.isRequired
}

export default Headline
