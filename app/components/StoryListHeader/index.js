import React, { PropTypes } from 'react'
import ParseDate from '../../common/utils/ParseDate'
import styles from './styles.css'

const StoryListHeader = ({date}) => {
  return <h2 className={styles.title}>{ParseDate(date)}</h2>
}

StoryListHeader.propTypes = {
  date: PropTypes.number.isRequired
}

export default StoryListHeader
