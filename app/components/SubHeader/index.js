import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Logo from '../Logo'
import Arrow from '../Arrow'
import styles from './styles.css'
import { rootPath } from '../../utils/RoutesHelper'

const SubHeader = ({openMenu, closeMenu, menu}) => {
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
        </Link>
      </div>
      <div onClick={toggleMenu} className={styles.menuTrigger}>
        <Logo type='mobile' />
        <span className={styles.title}>Top Stories</span>
        <Arrow />
      </div>
    </section>
  )
}

SubHeader.propTypes = {
  openMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  menu: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired
  }).isRequired
}

export default SubHeader
