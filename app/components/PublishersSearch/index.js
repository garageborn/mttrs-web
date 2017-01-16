import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import Loupe from '../../assets/loupeClear.svg'
import styles from './styles.css'

const messages = defineMessages({
  searchPublishers: {
    id: 'publishers.search',
    defaultMessage: 'Find your favorite publisher...'
  }
})

const PublishersSearch = ({handleFocus, handleBlur, isActive, handleSearchTerm, intl}) => {
  return (
    <div className={styles.outerBorder}>
      <div className={styles.search}>
        <Loupe />
        <input
          onChange={handleSearchTerm}
          className={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={intl.formatMessage(messages.searchPublishers)}
        />
      </div>
    </div>
  )
}

PublishersSearch.propTypes = {
  handleBlur: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleSearchTerm: PropTypes.func.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(PublishersSearch)
