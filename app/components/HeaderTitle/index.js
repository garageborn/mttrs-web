import React, { PropTypes } from 'react'
import styles from './styles.css'

const HeaderTitle = ({ title, color }) => (
  <p className={styles.title} style={{ color }}>{title}</p>
)

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default HeaderTitle
