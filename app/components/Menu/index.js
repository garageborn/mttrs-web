import React, { Component, PropTypes } from 'react'
import MenuCategoriesContainer from '../../containers/MenuCategoriesContainer'
import styles from './styles.css'

class Menu extends Component {
  render () {
    const { closeMenu } = this.props
    return (
      <div className={styles.container}>
        <MenuCategoriesContainer closeMenu={closeMenu} />
      </div>
    )
  }
}

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired
}

export default Menu
