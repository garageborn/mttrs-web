import React from 'react'
import Logo from '../Logo'
import MenuTrigger from '../MenuTrigger'
import SubHeaderContainer from '../../containers/SubHeaderContainer'
import NavContainer from '../../containers/NavContainer'
import styles from './styles.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.trigger}>
        <MenuTrigger color='#08C' />
        <p className={styles.category}>Tecnologia & Ciência</p>
      </div>
      <a className={styles.logo} href='/'>
        <Logo />
      </a>
      <div className={styles.slogan}>
        <p>Seu tempo é precioso. Leia as notícias que realmente importam no dia a dia.</p>
      </div>
      {/* <div>
        <SubHeaderContainer />
        <NavContainer />
      </div> */}
    </header>
  )
}

export default Header
