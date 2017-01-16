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

const PublishersSearch = ({isActive, handleSearchTerm, intl}) => {
  return (
    <div className={styles.outerBorder}>
      <div className={styles.search}>
        <Loupe />
        <input onChange={handleSearchTerm} className={styles.input} placeholder={intl.formatMessage(messages.searchPublishers)} />
      </div>
    </div>
  )
}

PublishersSearch.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleSearchTerm: PropTypes.func.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(PublishersSearch)
