import React, { Component, PropTypes } from 'react'
import LogoMttrs from '../../assets/logo-mttrs.svg'
import LogoMttrsMobile from '../../assets/logo-mttrs-mobile.svg'

class Logo extends Component {
  getLogoType () {
    const { type } = this.props
    if (type === 'mobile') {
      return <LogoMttrsMobile />
    }

    return <LogoMttrs />
  }

  render () {
    return this.getLogoType()
  }
}

Logo.propTypes = {
  type: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired
}

Logo.defaultProps = {
  type: 'default'
}

export default Logo
