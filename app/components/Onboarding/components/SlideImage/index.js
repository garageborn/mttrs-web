import React, { PropTypes } from 'react'
import { mediaQueries } from '../../../../utils/variables'
import styles from './styles.css'

const SlideImage = ({ source }) => (
  <picture className={styles.container}>
    <source srcSet={source.notSmall} media={mediaQueries.notSmall} />
    <img className={styles.image} src={source.small} alt='' />
  </picture>
)

SlideImage.propTypes = {
  source: React.PropTypes.string.isRequired
}

export default SlideImage
