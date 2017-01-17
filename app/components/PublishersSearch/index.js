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

const PublishersSearch = ({handleFocus, deactivateSearch, isActive, handleSearchTerm, intl}) => {
  let renderClose = <div />
  if (isActive) {
    renderClose = (
      <div
        className={styles.close}
        onClick={deactivateSearch}
      >
        close
      </div>
    )
  }
  return (
    <div className={styles.outerBorder}>
      <div className={styles.search}>
        <Loupe />
        <input
          onChange={handleSearchTerm}
          className={styles.input}
          onFocus={handleFocus}
          placeholder={intl.formatMessage(messages.searchPublishers)}
        />
        {renderClose}
      </div>
    </div>
  )
}

PublishersSearch.propTypes = {
  isActive: PropTypes.bool.isRequired,
  deactivateSearch: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleSearchTerm: PropTypes.func.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(PublishersSearch)
