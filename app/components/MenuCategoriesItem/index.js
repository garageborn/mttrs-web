import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './styles.css'

const MenuCategoriesItem = ({ to, name, color, closeMenu, component, ...props }) => (
  <component.type itemProp={props.itemPropName}>
    <Link
      to={to}
      onClick={closeMenu}
      className={styles.item}
      activeStyle={{ color }}
      activeClassName={styles.active}
      itemProp={props.itemPropUrl}
    >
      <span className={styles.category}>{name}</span>
      <div className={styles.marker} style={{backgroundColor: color}} />
    </Link>
  </component.type>
)

MenuCategoriesItem.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired,
  component: PropTypes.element.isRequired,
  itemPropName: PropTypes.string,
  itemPropUrl: PropTypes.string
}

export default MenuCategoriesItem
