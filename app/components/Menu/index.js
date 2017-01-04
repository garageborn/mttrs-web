import React, { Component, PropTypes } from 'react'
import MenuSelector from '../MenuSelector'
import MenuPanel from '../MenuPanel'
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
        <div className={styles.selector}>
          <MenuSelector activePanel={this.state.activePanel} selectPanel={this.selectPanel} />
        </div>
        <MenuPanel closeMenu={closeMenu} activePanel={this.state.activePanel} />
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
