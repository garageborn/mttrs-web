import React, { Component, PropTypes } from 'react'
import styles from '../../styles.css'

const firstPlaceholder = require('./assets/placeholder-01.png')
const secondPlaceholder = require('./assets/placeholder-02.png')
const thirdPlaceholder = require('./assets/placeholder-03.png')
const fourthPlaceholder = require('./assets/placeholder-04.png')
const fifthPlaceholder = require('./assets/placeholder-05.png')

const placeholders = [
  firstPlaceholder, firstPlaceholder,
  secondPlaceholder, secondPlaceholder,
  thirdPlaceholder, thirdPlaceholder,
  fourthPlaceholder, fourthPlaceholder,
  fifthPlaceholder, fifthPlaceholder
]

class Placeholder extends Component {
  render () {
    return <img className={styles.image} src={this.getPlaceholder()} alt='' />
  }

  getPlaceholder () {
    const lastDigit = this.props.story.id % 10
    return placeholders[lastDigit]
  }
}

Placeholder.propTypes = {
  story: PropTypes.shape({
    id: PropTypes.any.isRequired
  }).isRequired
}

export default Placeholder
