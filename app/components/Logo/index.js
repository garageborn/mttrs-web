import React, { PropTypes } from 'react'
import styles from './styles.css'

const Logo = (props) => {
  return (
    <img
      className={styles.logo}
      src={require('../../assets/logo-mttrs.png')}
      alt={props.tagline}
    />
  )
}

Logo.propTypes = {
  tagline: PropTypes.string.isRequired
}

export default Logo
