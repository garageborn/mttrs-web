/* eslint-disable react/jsx-no-bind */
import React, { PropTypes } from 'react'
import styles from './styles.css'

const MenuSelector = ({activePanel, selectPanel}) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => selectPanel('categories')}>Categories</button>
      <button className={styles.button} onClick={() => selectPanel('publishers')}>Publishers</button>
    </div>
  )
}

MenuSelector.propTypes = {
  activePanel: PropTypes.string.isRequired,
  selectPanel: PropTypes.func.isRequired
}

export default MenuSelector
