/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react'
import MenuPublishersItem from '../MenuPublishersItem'
import { injectIntl, defineMessages } from 'react-intl'
import Loupe from '../../assets/loupe.svg'
import styles from './styles.css'

const messages = defineMessages({
  searchPublishers: {
    id: 'publishers.search',
    defaultMessage: 'Filter publishers'
  }
})

class MenuPublishers extends Component {
  render () {
    const { publishers } = this.props
    const { formatMessage } = this.props.intl
    return (
      <div className={styles.container}>
        <div className={styles.search}>
          <Loupe />
          <input className={styles.input} placeholder={formatMessage(messages.searchPublishers)} />
        </div>
        <div className={styles.publishers}>
          {publishers.map((publisher) => <MenuPublishersItem key={publisher.id} publisher={publisher} />)}
        </div>
      </div>
    )
  }
}

MenuPublishers.propTypes = {
  publishers: PropTypes.array.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(MenuPublishers)
