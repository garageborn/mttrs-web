import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { injectIntl, defineMessages } from 'react-intl'
import Logo from '../Logo'
import Arrow from '../Arrow'
import styles from './styles.css'

const messages = defineMessages({
  topStories: {
    id: 'header.topStories',
    defaultMessage: 'Top Stories'
  }
})

class SubHeader extends Component {
  render () {
    const { rootPath } = this.props
    return (
      <section className={styles.subHeader}>
        <div className={styles.logoSection}>
          <Link to={rootPath} className={styles.title}>
            <Logo />
          </Link>
        </div>
        <div className={styles.menuTrigger}>
          <Logo type='mobile' />
          <span className={styles.title}>{this.getTitle()}</span>
          <Arrow />
        </div>
      </section>
    )
  }

  getTitle () {
    const { formatMessage } = this.props.intl
    return formatMessage(messages.topStories)
  }
}

SubHeader.propTypes = {
  rootPath: PropTypes.string.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(SubHeader)
