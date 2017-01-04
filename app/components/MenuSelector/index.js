/* eslint-disable react/jsx-no-bind */
import React, { Component, PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import className from 'classnames'
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
  buttonClass (panel) {
    const { activePanel } = this.props
    return className({
      [styles.button]: true,
      [styles.buttonActive]: activePanel === panel
    })
  }

  render () {
    const { selectPanel } = this.props
    const { formatMessage } = this.props.intl
    return (
      <div className={styles.container}>
        <button
          className={this.buttonClass('categories')}
          onClick={() => selectPanel('categories')}
        >
          {formatMessage(messages.categories)}
        </button>
        <button
          className={this.buttonClass('publishers')}
          onClick={() => selectPanel('publishers')}
        >
          {formatMessage(messages.publishers)}
        </button>
      </div>
    )
  }
}

MenuSelector.propTypes = {
  selectPanel: PropTypes.func.isRequired,
  activePanel: PropTypes.string.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(MenuSelector)
