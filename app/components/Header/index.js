import React from 'react'
import SubHeaderContainer from '../../containers/SubHeaderContainer'
import NavContainer from '../../containers/NavContainer'
import styles from './styles.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <SubHeaderContainer />
        <NavContainer />
      </div>
    </header>
  )
}

export default Header
