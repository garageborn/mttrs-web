import React, { PropTypes } from 'react'
import styles from './styles.css'

const MenuSelector = ({activePanel, selectPanel}) => {
  return (
    <div className={styles.container}>
      <div onClick={() => selectPanel('categories')}>Categories</div>
      <div onClick={() => selectPanel('publishers')}>Publishers</div>
    </div>
  )
}

MenuSelector.propTypes = {
  activePanel: PropTypes.string.isRequired,
  selectPanel: PropTypes.func.isRequired
}

export default MenuSelector
