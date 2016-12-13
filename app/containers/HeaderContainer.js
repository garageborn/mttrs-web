import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { push } from 'react-router-redux'
import NavItem from '../components/NavItem'
import { categoryPath, storiesPath } from '../utils/RoutesHelper'
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
            <a onClick={() => this.openHome()}>Mttrs - {headerTagline}</a>
          </h1>

          <nav>
            <ul>
              {this.defaultItem}
              {this.categoriesItems}
            </ul>
          </nav>
        </div>
      </header>
    )
  }

  get defaultItem () {
    return (
      <NavItem
        category={{name: 'Top Stories'}}
        isSelected={!this.props.currentCategory}
        onClick={() => this.openHome()}
      />
    )
  }

  get categoriesItems () {
    const { loading, categories } = this.props.data
    if (loading) return
    return categories.map((category) => {
      return this.categoryItem(category)
    })
  }

  categoryItem (category) {
    return (
      <NavItem
        key={category.id}
        category={category}
        isSelected={this.isSelected(category)}
        onClick={() => this.openCategory()}
      />
    )
  }

  openCategory (category) {
    let path = categoryPath(category.slug, this.props.currentFilter)
    this.props.dispatch(push(path))
  }

  openHome () {
    let path = storiesPath(this.props.currentFilter)
    this.props.dispatch(push(path))
  }

  isSelected (category) {
    if (!this.props.currentCategory) return false
    return category.slug === this.props.currentCategory.slug
  }
}

let mapStateToProps = (state) => {
  return {
    currentCategory: state.CurrentCategoryReducer.category,
    currentFilter: state.FilterReducers.filter
  }
}

const Query = gql`query { categories(ordered: true) { id name slug color icon_id } }`
const intlHeaderContainer = injectIntl(HeaderContainer)
const HeaderContainerWithData = graphql(Query)(intlHeaderContainer)
export default connect(mapStateToProps)(HeaderContainerWithData)
