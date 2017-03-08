import React, { PropTypes } from 'react'
import styles from './styles.css'

const MenuTrigger = ({ color, toggleMenu }) => (
  <div onClick={toggleMenu} className={styles.trigger}>
    <span className={styles.square} style={{ backgroundColor: color }} />
    <span className={styles.square} />
    <span className={styles.square} />
  </div>
)

MenuTrigger.propTypes = {
  color: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired
}

export default MenuTrigger
