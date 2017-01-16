import React, { Component, PropTypes } from 'react'
import LogoMttrs from '../../assets/logo-mttrs.png'
import styles from './styles.css'

class Logo extends Component {
  getLogoType () {
    return <img className={styles.logo} src={LogoMttrs} alt='' />
  }

  render () {
    return this.getLogoType()
  }
}

Logo.propTypes = {
  type: PropTypes.string.isRequired
}

Logo.defaultProps = {
  type: 'default'
}

export default Logo
