import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Logo from '../Logo'
import SubheaderMobile from '../SubheaderMobile'
import { rootPath } from '../../utils/RoutesHelper'
import styles from './styles.css'

const SubHeader = ({openMenu, closeMenu, menu, section}) => {
  let toggleMenu = () => {
    if (menu.isOpen) {
      return closeMenu()
    } else {
      return openMenu()
    }
  }

  return (
    <section className={styles.subHeader}>
      <div className={styles.logoSection}>
        <Link to={rootPath} className={styles.title}>
          <Logo />
          <span className='u-hidden'>mttrs</span>
        </Link>
      </div>
      <div onClick={toggleMenu} className={styles.menuTrigger}>
        <SubheaderMobile section={section} />
      </div>
    </section>
  )
}

SubHeader.propTypes = {
  openMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  section: PropTypes.object.isRequired,
  menu: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired
  }).isRequired
}

export default SubHeader
