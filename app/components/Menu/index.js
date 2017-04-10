import React, { PropTypes } from 'react'
import className from 'classnames'
import MenuAboutMttrs from '../MenuAboutMttrs'
import MenuTenant from '../MenuTenant'
import MenuMttrsDownload from '../MenuMttrsDownload'
import MenuCategoriesContainer from '../../containers/MenuCategoriesContainer'
import styles from './styles.css'

const Menu = ({ closeMenu, isOpen, openOnboarding }) => {
  let menuClasses = className({
    [styles.container]: true,
    [styles.menuOpen]: isOpen
  })

  return (
    <div className={menuClasses}>
      <MenuCategoriesContainer closeMenu={closeMenu} />
      <div>
        <MenuTenant />
        <MenuMttrsDownload />
        <MenuAboutMttrs openOnboarding={openOnboarding} />
      </div>
    </div>
  )
}

Menu.propTypes = {
  openOnboarding: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Menu
