import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Logo from '../Logo'
import Arrow from '../Arrow'
import styles from './styles.css'

const SubHeader = (props) => {
  return (
    <section className={styles.subHeader}>
      <div className={styles.logoSection}>
        <Link to={props.rootPath} className={styles.title}>
          <Logo tagline={props.tagline} />
        </Link>
      </div>
      <div className={styles.menuTrigger}>
        <Logo type='mobile' tagline={props.tagline} />
        <span className={styles.title}>Top Stories</span>
        <Arrow />
      </div>
    </section>
  )
}

SubHeader.propTypes = {
  rootPath: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired
}

export default SubHeader
