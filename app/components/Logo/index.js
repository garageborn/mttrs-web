import React, { Component, PropTypes } from 'react'
import LogoMttrs from '../../assets/logo-mttrs.png'
import LogoMttrsMobile from '../../assets/logo-mttrs-mobile.png'
import styles from './styles.css'

class Logo extends Component {
  getLogoType () {
    const { type } = this.props
    if (type === 'mobile') {
      return <img className={styles.mobile} src={LogoMttrsMobile} alt='' />
    }

    return <img className={styles.desktop} src={LogoMttrs} alt='' />
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
