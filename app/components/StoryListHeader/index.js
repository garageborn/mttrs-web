import React, { PropTypes } from 'react'
import ParseDate from '../../common/utils/ParseDate'
import injectSettings from '../../config/injectSettings'
import styles from './styles.css'

const StoryListHeader = ({date, settings}) => {
  return <h2 className={styles.title}>{ParseDate(date, settings.timezone)}</h2>
}

StoryListHeader.propTypes = {
  date: PropTypes.number.isRequired
}

export default injectSettings(StoryListHeader)
