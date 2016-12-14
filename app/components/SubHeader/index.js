import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './styles.css'

const SubHeader = (props) => {
  return (
    <section className={styles.subHeader}>
      <div className={styles.logoSection}>
        <Link to={props.rootPath} className={styles.title}>
          {/* <Logo alt={props.tagline} /> */}
          Mttrs
          <span>{props.tagline}</span>
        </Link>
      </div>
      <div className={styles.menuTrigger}>
        {/* <Logo alt={props.tagline} /> */}
        <span className={styles.title}>Top Stories</span>
        {/* <ArrowDown /> */}
      </div>
    </section>
  )
}

SubHeader.propTypes = {
  rootPath: PropTypes.string.isRequired
}

export default SubHeader
