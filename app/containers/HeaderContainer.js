import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router'
import NavItem from '../components/NavItem'
import { categoryPath, rootPath } from '../utils/RoutesHelper'
import styles from '../styles/app.css'
import { injectIntl, defineMessages } from 'react-intl'

const messages = defineMessages({
  headerTagline: {
    id: 'header.tagline',
    defaultMessage: 'Read What Matters'
  }
})

class HeaderContainer extends Component {
  render () {
    const { formatMessage } = this.props.intl
    let headerTagline = formatMessage(messages.headerTagline)

    return (
      <header>
        <div className={styles.container}>
          <h1>
            <Link to={rootPath}>
              Mttrs - {headerTagline}
            </Link>
          </h1>

          <nav>
            <ul>
              <NavItem name={'Top Stories'} url={rootPath} />
              {this.categoriesItems}
            </ul>
          </nav>
        </div>
      </header>
    )
  }

  get categoriesItems() {
    const { loading, categories } = this.props.data
    if (loading) return
    return categories.map((category) => {
      return <NavItem key={category.id} name={category.name} url={categoryPath(category.slug)} />
    })
  }
}

const Query = gql`query { categories(ordered: true) { id name slug color icon_id } }`
const intlHeaderContainer = injectIntl(HeaderContainer)
export default graphql(Query)(intlHeaderContainer)
