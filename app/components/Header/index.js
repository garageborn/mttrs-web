import React, { Component, PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import HeaderLogo from '../HeaderLogo'
import HeaderTitle from '../HeaderTitle'
import MenuTrigger from '../MenuTrigger'
import HeaderSlogan from '../HeaderSlogan'
import { properties } from '../../utils/variables'
import styles from './styles.css'

const messages = defineMessages({
  topStories: {
    id: 'header.topStories'
  }
})

class Header extends Component {
  constructor () {
    super()

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  get section () {
    const { section, intl } = this.props
    if (section.type !== 'popular') {
      return section.model.name
    }
    return intl.formatMessage(messages.topStories)
  }

  get sectionColor () {
    const { section } = this.props
    const { mttrsOrange, mttrsGray } = properties
    switch (section.type) {
      case 'popular':
        return mttrsOrange
      case 'publishers':
        return mttrsGray
      default:
        return section.model.color
    }
  }

  toggleMenu () {
    const { menu, openMenu, closeMenu } = this.props
    if (menu.isOpen) {
      return closeMenu()
    } else {
      return openMenu()
    }
  }

  render () {
    return (
      <header className={styles.header} style={{ borderColor: this.sectionColor }}>
        <div className={styles.trigger}>
          <MenuTrigger toggleMenu={this.toggleMenu} color={this.sectionColor} />
          <HeaderTitle title={this.section} color={this.sectionColor} />
        </div>
        <HeaderLogo />
        <HeaderSlogan />
      </header>
    )
  }
}

Header.propTypes = {
  openMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  section: PropTypes.object.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  menu: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired
  }).isRequired
}

export default injectIntl(Header)
