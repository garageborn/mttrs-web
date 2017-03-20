import React, { PropTypes } from 'react'
import styles from './styles.css'

const SlideImage = ({ source }) => (
  <img className={styles.image} src={source} alt='' />
)

SlideImage.propTypes = {
  source: React.PropTypes.string.isRequired
}

export default SlideImage
