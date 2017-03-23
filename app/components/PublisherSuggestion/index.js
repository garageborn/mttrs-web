import React, { Component, PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { properties } from '../../utils/variables'
import Success from './components/Success'
import Error from './components/Error'
import Button from '../Button'
import icon from './assets/icon.svg'
import styles from './styles.css'

const messages = defineMessages({
  title: { id: 'publisher.suggestion.title' },
  subTitle: { id: 'publisher.suggestion.subTitle' },
  sendButton: { id: 'publisher.suggestion.sendButton' }
})

class PublisherSuggestion extends Component {
  constructor () {
    super()

    this.onButtonClick = this.onButtonClick.bind(this)
  }

  renderStatus () {
    if (this.props.status === 'success') return <Success onBack={this.props.onSuccessBack} />
    if (this.props.status === 'error') return <Error onErrorRefresh={this.onButtonClick} />

    const { intl } = this.props
    const { white, mttrsOrange } = properties
    let label = intl.formatMessage(messages.sendButton)

    return (
      <Button onClick={this.onButtonClick} textColor={white} backgroundColor={mttrsOrange}>
        {label}
      </Button>
    )
  }

  render () {
    const { intl, publisher } = this.props
    let title = intl.formatMessage(messages.title)
    let subTitle = intl.formatMessage(messages.subTitle)

    return (
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <span className={styles.subTitle}>{subTitle}</span>
        <img className={styles.icon} src={icon} alt='' />
        <p className={styles.publisher}>{publisher}</p>
        {this.renderStatus()}
      </div>
    )
  }

  onButtonClick () {
    return this.props.sendSuggestion()
  }
}

PublisherSuggestion.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  sendSuggestion: PropTypes.func,
  publisher: PropTypes.string,
  status: PropTypes.string.isRequired,
  onSuccessBack: PropTypes.func.isRequired
}

export default injectIntl(PublisherSuggestion)
