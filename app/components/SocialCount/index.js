import React, { PropTypes } from 'react'
import SocialCount from '../../common/utils/SocialCount'
import styles from './styles.css'

const StorySocialCount = ({totalSocial}) => {
  let count = SocialCount(totalSocial)
  let socialCountAlt = `Social Count: ${count}`
  return (
    <p className={styles.text}>
      <img src={require('../../assets/icon-social-count.png')} alt={socialCountAlt} /> {count}
    </p>
  )
}

StorySocialCount.propTypes = {
  totalSocial: PropTypes.number.isRequired
}

export default StorySocialCount
