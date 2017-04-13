import React, { PropTypes } from 'react'
import classNames from 'classnames'
import icon from './assets/icon.svg'
import styles from './styles.css'

const Logo = ({ isVisited }) => {
  let logoStyles = classNames({
    [styles.container]: true,
    [styles.isVisited]: isVisited
  })

  return (
    <div className={logoStyles}>
      <img src={icon} alt='mttrs' />
    </div>
  )
}

Logo.propTypes = {
  isVisited: PropTypes.bool.isRequired
}

export default Logo
