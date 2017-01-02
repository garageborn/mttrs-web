/* eslint-disable react/jsx-no-bind, react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import styles from './styles.css'

const messages = defineMessages({
  categories: {
    id: 'selector.categories',
    defaultMessage: 'Categories'
  },

  publishers: {
    id: 'selector.publishers',
    defaultMessage: 'Publishers'
  }
})

class MenuSelector extends Component {
  render () {
    const { selectPanel } = this.props
    const { formatMessage } = this.props.intl
    return (
      <div className={styles.container}>
        <button className={styles.button} onClick={() => selectPanel('categories')}>{formatMessage(messages.categories)}</button>
        <button className={styles.button} onClick={() => selectPanel('publishers')}>{formatMessage(messages.publishers)}</button>
      </div>
    )
  }
}

MenuSelector.propTypes = {
  selectPanel: PropTypes.func.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(MenuSelector)
