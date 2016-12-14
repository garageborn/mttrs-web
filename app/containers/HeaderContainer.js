import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Header from '../components/Header'
import Nav from '../components/Nav'
import NavItem from '../components/NavItem'
import { categoryPath, storiesPath } from '../utils/RoutesHelper'

class HeaderContainer extends Component {
  constructor() {
    super()

    this.openHome = this.openHome.bind(this)
    this.openCategory = this.openCategory.bind(this)
  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <nav>
          <ul>
            {this.defaultItem}
            {this.categoriesItems}
          </ul>
        </nav>
      </div>
    )
  }

  get defaultItem() {
    return (
      <NavItem
        category={{name: 'Top Stories'}}
        isSelected={!this.props.currentCategory}
        onClick={this.openHome}
      />
    )
  }

  get categoriesItems() {
    const { loading, categories } = this.props.data
    if (loading) return
    return categories.map((category) => {
      return this.categoryItem(category)
    })
  }

  categoryItem(category) {
    return (
      <NavItem
        key={category.id}
        category={category}
        isSelected={this.isSelected(category)}
        onClick={this.openCategory}
      />
    )
  }

  openCategory(category) {
    let path = categoryPath(category.slug, this.props.currentFilter)
    this.props.dispatch(push(path))
  }

  openHome() {
    let path = storiesPath(this.props.currentFilter)
    this.props.dispatch(push(path))
  }

  isSelected(category) {
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
const HeaderContainerWithData = graphql(Query)(HeaderContainer)
export default connect(mapStateToProps)(HeaderContainerWithData)
