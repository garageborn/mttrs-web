import React, { Component, PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import SubHeader from '../SubHeader'
import NavContainer from '../../containers/NavContainer'
import { rootPath } from '../../utils/RoutesHelper'
import styles from './styles.css'

const messages = defineMessages({
  headerTagline: {
    id: 'header.tagline',
    defaultMessage: 'Read What Matters'
  }
})

class Header extends Component {
  render () {
    const { formatMessage } = this.props.intl
    let headerTagline = formatMessage(messages.headerTagline)

    return (
      <header className={styles.header}>
        <SubHeader rootPath={rootPath} tagline={headerTagline} />
        <NavContainer />
      </header>
    )
  }
}

Header.propTypes = {
  intl: PropTypes.object.isRequired
}

export default injectIntl(Header)
