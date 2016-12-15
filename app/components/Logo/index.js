import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import styles from './styles.css'

class Logo extends Component {
  getLogoType () {
    const { type } = this.props
    if (type === 'mobile') {
      return require('../../assets/logo-mttrs-mobile.png')
    }

    return require('../../assets/logo-mttrs.png')
  }

  getClassNames () {
    const { type } = this.props
    return classNames({
      [styles.logo]: true,
      [styles.logoMobile]: type === 'mobile',
      [styles.logoNotMobile]: type === 'default'
    })
  }

  render () {
    return (
      <img
        className={this.getClassNames()}
        src={this.getLogoType()}
        alt={this.props.tagline}
      />
    )
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
