import React, { PropTypes } from 'react'
import MenuCategoriesContainer from '../../containers/MenuCategoriesContainer'
import styles from './styles.css'

const MenuPanel = ({ closeMenu }) => (
  <div className={styles.container}>
    <MenuCategoriesContainer closeMenu={closeMenu} />
  </div>
)

MenuPanel.propTypes = {
  closeMenu: PropTypes.func.isRequired
}

export default MenuPanel
