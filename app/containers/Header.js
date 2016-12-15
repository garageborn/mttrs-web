import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { injectIntl, defineMessages } from 'react-intl'
import SubHeader from '../components/SubHeader'
import NavContainer from '../containers/NavContainer'
import { rootPath } from '../utils/RoutesHelper'
import styles from '../styles/app.css'

const messages = defineMessages({
  headerTagline: {
    id: 'header.tagline',
    defaultMessage: 'Read What Matters'
  }
})

class Header extends Component {
  render() {
    const { formatMessage } = this.props.intl
    let headerTagline = formatMessage(messages.headerTagline)

    return (
      <div>
        <SubHeader rootPath={rootPath} />
        <NavContainer />
      </div>
      // <header>
      //   <div className={styles.container}>
      //     <h1>
      //       <Link to={rootPath}>Mttrs - {headerTagline}</Link>
      //     </h1>
      //
      //     <nav>
      //       <ul>
      //         <NavItem name={'Top Stories'} url={rootPath} />
      //         {this.categoriesItems}
      //       </ul>
      //     </nav>
      //   </div>
      // </header>
    )
  }
}

export default injectIntl(Header)
