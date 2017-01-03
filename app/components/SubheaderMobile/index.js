import React, { PropTypes } from 'react'
import Logo from '../Logo'
import Arrow from '../Arrow'
import PublisherIcon from '../PublisherIcon'
import styles from './styles.css'

const SubheaderMobile = ({section}) => {
  let getText = () => {
    if (section.type !== 'home') {
      return section.model.name
    }
    return 'Top Stories'
  }
  let getLogo = () => {
    if (section.type === 'publisher') {
      let publisher = {
        name: section.model.name,
        icon_id: section.model.icon_id
      }
      return <PublisherIcon publisher={publisher} size='small' />
    }
    return <Logo type='mobile' />
  }

  return (
    <div className={styles.container}>
      {getLogo()}
      <span className={styles.text}>{getText()}</span>
      <Arrow />
    </div>
  )
}

SubheaderMobile.propTypes = {
  section: PropTypes.object.isRequired
}

export default SubheaderMobile
