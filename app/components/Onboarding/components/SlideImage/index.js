import React, { PropTypes, Component } from 'react'
import { mediaQueries } from '../../../../utils/variables'
import styles from './styles.css'

class SlideImage extends Component {
  componentDidMount () {
    const picturefill = require('picturefill')
    picturefill()
  }

  render () {
    const { source } = this.props
    return (
      <picture className={styles.container}>
        <source srcSet={source.notSmall} media={mediaQueries.notSmall} />
        <img className={styles.image} src={source.small} alt='' />
      </picture>
    )
  }
}

SlideImage.propTypes = {
  source: PropTypes.object.isRequired
}

export default SlideImage
