import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import Loupe from '../../assets/loupe.svg'
import styles from './styles.css'

const messages = defineMessages({
  searchPublishers: {
    id: 'publishers.search',
    defaultMessage: 'Search for publishers'
  }
})

const PublishersSearch = ({handleSearchTerm, intl}) => {
  return (
    <div className={styles.search}>
      <Loupe />
      <input onChange={handleSearchTerm} className={styles.input} placeholder={intl.formatMessage(messages.searchPublishers)} />
    </div>
  )
}

PublishersSearch.propTypes = {
  handleSearchTerm: PropTypes.func.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(PublishersSearch)
