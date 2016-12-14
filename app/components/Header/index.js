import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './header.css'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div>
        <Link to={props.rootPath} className={styles.title}>
          {/* <Logo alt={props.tagline} /> */}
          Mttrs
        </Link>
      </div>
      <div className={styles.menuTrigger}>
        {/* <Logo alt={props.tagline} /> */}
        <span className={styles.title}>Top Stories</span>
        {/* <ArrowDown /> */}
      </div>
    </header>
  )
}

Header.propTypes = {
  rootPath: PropTypes.string.isRequired
}

export default Header
