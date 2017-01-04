import React, { PropTypes, Component } from 'react'
import MenuCategoriesContainer from '../../containers/MenuCategoriesContainer'
import MenuPublishersContainer from '../../containers/MenuPublishersContainer'
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
    if (this.props.activePanel === 'categories') {
      return <MenuCategoriesContainer closeMenu={closeMenu} />
    } else {
      return <MenuPublishersContainer closeMenu={closeMenu} />
    }
  }
}

MenuPanel.propTypes = {
  activePanel: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired
}

export default MenuPanel
