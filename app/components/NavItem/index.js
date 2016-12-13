import React, { PropTypes } from 'react'
import styles from './navitem.css'

const NavItem = ({ category, isSelected, onClick }) => {
  return (
    <li className={styles.category}>
      {isSelected
       ? <span className={styles.active}>{category.name}</span>
       : <a onClick={e => onClick(category)}>{category.name}</a>}
    </li>
  )
}

NavItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default NavItem
