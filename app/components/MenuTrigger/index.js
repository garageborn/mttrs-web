import React, { PropTypes } from 'react'
import { properties } from '../../utils/variables'
import styles from './styles.css'

const MenuTrigger = ({ color, toggleMenu }) => (
  <button onClick={toggleMenu} className={styles.trigger}>
    <span className={styles.square} style={{ backgroundColor: color }} />
    <span className={styles.square} />
    <span className={styles.square} />
  </button>
)

MenuTrigger.propTypes = {
  color: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired
}

MenuTrigger.defaultProps = {
  color: properties.mttrsGray
}

export default MenuTrigger
