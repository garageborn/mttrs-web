import React from 'react'
import { Link } from 'react-router'
import { rootPath } from '../../utils/RoutesHelper'
import Logo from '../Logo'
import styles from './styles.css'

const HeaderLogo = () => (
  <div className={styles.logo} itemScope itemType='http://schema.org/Organization'>
    <Link to={rootPath} itemProp='url'>
      <Logo />
    </Link>
  </div>
)

export default HeaderLogo
