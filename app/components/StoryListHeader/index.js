import React, { PropTypes } from 'react'
import ParseDate from '../../utils/ParseDate'
import injectSettings from '../../config/injectSettings'
import styles from './styles.css'

const StoryListHeader = ({date, settings, type}) => {
  let parsedDate = ParseDate(date, settings.timezone)
  if (type === 'placeholder') parsedDate = 'Today'
  return <h2 className={styles.title}>{parsedDate}</h2>
}

StoryListHeader.propTypes = {
  date: PropTypes.number,
  type: PropTypes.string,
  settings: PropTypes.object.isRequired
}

export default injectSettings(StoryListHeader)
