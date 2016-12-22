import React, { PropTypes } from 'react'
import SubHeader from '../SubHeader'
import NavContainer from '../../containers/NavContainer'
import { rootPath } from '../../utils/RoutesHelper'
import styles from './styles.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <SubHeader rootPath={rootPath} />
        <NavContainer />
      </div>
    </header>
  )
}

export default Header
