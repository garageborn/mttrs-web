import React, { Component, PropTypes } from 'react'
import MenuCategoriesContainer from '../../containers/MenuCategoriesContainer'
import styles from './styles.css'

class Menu extends Component {
  constructor () {
    super()
    this.state = {
      activePanel: 'categories'
    }
    this.selectPanel = this.selectPanel.bind(this)
  }

  render () {
    const { closeMenu } = this.props
    return (
      <div className={styles.container}>
        <MenuCategoriesContainer closeMenu={closeMenu} />
      </div>
    )
  }

  selectPanel (panel) {
    return (
      this.setState({
        activePanel: panel
      })
    )
  }
}

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired
}

export default Menu
