import React, { PropTypes } from 'react'
import className from 'classnames'
import MenuAboutMttrs from '../MenuAboutMttrs'
import MenuTenant from '../MenuTenant'
import MenuMttrsDownload from '../MenuMttrsDownload'
import MenuCategoriesContainer from '../../containers/MenuCategoriesContainer'
import styles from './styles.css'

const Menu = ({ closeMenu, isOpen }) => {
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
        {/* <MenuAboutMttrs /> */}
      </div>
    </div>
  )
}

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Menu
