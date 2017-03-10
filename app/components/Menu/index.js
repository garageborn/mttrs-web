import React, { PropTypes } from 'react'
import MenuAboutMttrs from '../MenuAboutMttrs'
import MenuMttrsDownload from '../MenuMttrsDownload'
import MenuCategoriesContainer from '../../containers/MenuCategoriesContainer'
import styles from './styles.css'

const Menu = ({ closeMenu }) => (
  <div className={styles.container}>
    <MenuCategoriesContainer closeMenu={closeMenu} />
    <MenuMttrsDownload />
    <MenuAboutMttrs />
  </div>
)

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired
}

export default Menu
