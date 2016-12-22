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
    if (this.props.activePanel === 'categories') {
      return <MenuCategoriesContainer />
    } else {
      return <MenuPublishersContainer />
    }
  }
}

MenuPanel.propTypes = {
  activePanel: PropTypes.string.isRequired
}

export default MenuPanel
