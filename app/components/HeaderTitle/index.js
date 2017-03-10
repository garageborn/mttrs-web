import React, { PropTypes } from 'react'
import styles from './styles.css'

const HeaderTitle = ({ title, color }) => (
  <p className={styles.title} style={{ color }}>{title}</p>
)

HeaderTitle.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string
}

export default HeaderTitle
