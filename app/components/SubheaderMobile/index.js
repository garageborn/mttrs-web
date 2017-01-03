import React, { PropTypes } from 'react'
import Logo from '../Logo'
import Arrow from '../Arrow'
import styles from './styles.css'

const SubheaderMobile = ({section}) => {
  switch (section.type) {
    case 'category':
      return (
        <div>
          <Logo type='mobile' />
          <span className={styles.text}>{section.model.name}</span>
          <Arrow />
        </div>
      )
    case 'publisher':
      return (
        <div>
          <Logo type='mobile' />
          <span className={styles.text}>{section.model.name}</span>
          <Arrow />
        </div>
      )
    default:
      return (
        <div>
          <Logo type='mobile' />
          <span className={styles.text}>Top Stories</span>
          <Arrow />
        </div>
      )
  }
}

SubheaderMobile.propTypes = {
  section: PropTypes.object.isRequired
}

export default SubheaderMobile
