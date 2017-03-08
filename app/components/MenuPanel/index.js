import React, { PropTypes, Component } from 'react'
import MenuCategoriesContainer from '../../containers/MenuCategoriesContainer'
import styles from './styles.css'

class MenuPanel extends Component {
  render () {
    return (
      <div className={styles.container}>
        {this.renderPanel()}
      </div>
    )
  }

  renderPanel () {
    const { closeMenu } = this.props
    return <MenuCategoriesContainer closeMenu={closeMenu} />
  }
}

MenuPanel.propTypes = {
  closeMenu: PropTypes.func.isRequired
}

export default MenuPanel
