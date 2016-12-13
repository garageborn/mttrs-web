import React, { PropTypes } from 'react'
import styles from './header.css'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Top Stories'
}

export default Header
