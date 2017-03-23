import React, { Component, PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import classNames from 'classnames'
import styles from './styles.css'

const messages = defineMessages({
  showMore: { id: 'summary.showMore' },
  showLess: { id: 'summary.showLess' }
})

class Footer extends Component {
  get textStyles () {
    const { isVisited } = this.props
    return classNames({
      [styles.text]: true,
      [styles.isVisited]: isVisited
    })
  }

  get showLess () {
    const { intl, isVisited } = this.props

    let showLessStyles = classNames({
      [styles.showLess]: true,
      [styles.isVisited]: isVisited
    })

    return (
      <div className={styles.footer}>
        <div className={styles.button}>
          <div className={this.textStyles}>
            {intl.formatMessage(messages.showLess)}
          </div>
          <div className={showLessStyles} />
        </div>
      </div>
    )
  }

  get showMore () {
    const { intl, isVisited } = this.props

    let showMoreStyles = classNames({
      [styles.showMore]: true,
      [styles.isVisited]: isVisited
    })

    return (
      <div className={styles.footerWithGradient}>
        <div className={styles.gradient} />
        <div className={styles.button}>
          <div className={this.textStyles}>
            {intl.formatMessage(messages.showMore)}
          </div>
          <div className={showMoreStyles} />
        </div>
      </div>
    )
  }

  render () {
    const { isSummaryExpanded } = this.props

    if (isSummaryExpanded) {
      return this.showLess
    } else {
      return this.showMore
    }
  }
}

Footer.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  isSummaryExpanded: PropTypes.bool.isRequired,
  isVisited: PropTypes.bool.isRequired
}

export default injectIntl(Footer)
