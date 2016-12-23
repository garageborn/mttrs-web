import React, { PropTypes, Component } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import Loupe from '../../assets/loupe.svg'
import styles from './styles.css'

const messages = defineMessages({
  searchPublishers: {
    id: 'publishers.search',
    defaultMessage: 'Filter publishers'
  }
})

class MenuSearch extends Component {
  render () {
    const { formatMessage } = this.props.intl
    return (
      <div className={styles.search}>
        <Loupe />
        <input onChange={this.props.handleSearchTerm} className={styles.input} placeholder={formatMessage(messages.searchPublishers)} />
      </div>
    )
  }
}

MenuSearch.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(MenuSearch)
