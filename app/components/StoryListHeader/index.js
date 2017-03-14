import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import ParsedDate from '../ParsedDate'
import styles from './styles.css'

const messages = defineMessages({
  today: { id: 'today' }
})

const StoryListHeader = ({ date, type, intl }) => {
  if (type === 'placeholder') {
    return <h2 className={styles.title}>{intl.formatMessage(messages.today)}</h2>
  }

  let h2 = <h2 />
  return <ParsedDate type={type} className={styles.title} component={h2} date={date} />
}

StoryListHeader.propTypes = {
  date: PropTypes.number,
  type: PropTypes.string,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(StoryListHeader)
