import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import styles from './styles.css'

class Arrow extends Component {
  getClassNames () {
    const { direction } = this.props
    return classNames({
      [styles.arrow]: true,
      [styles.down]: direction === 'down',
      [styles.up]: direction === 'up',
      [styles.right]: direction === 'right',
      [styles.left]: direction === 'left'
    })
  }

  render () {
    return (
      <img
        className={this.getClassNames()}
        src={require('../../assets/arrow.png')}
        alt=''
      />
    )
  }
}

Arrow.propTypes = {
  direction: PropTypes.string.isRequired
}

Arrow.defaultProps = {
  direction: 'down'
}

export default Arrow
