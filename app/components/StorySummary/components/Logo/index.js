import React, { PropTypes } from 'react'
import classNames from 'classnames'
import icon from './assets/icon.svg'
import styles from './styles.css'

const Logo = () => {
  let logoStyles = classNames({
    [styles.container]: true
  })

  return (
    <div className={logoStyles}>
      <img src={icon} alt='mttrs' />
    </div>
  )
}

Logo.propTypes = {
  icon: PropTypes.any
}

export default Logo
