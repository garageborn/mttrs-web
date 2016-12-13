import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { push } from 'react-router-redux'
import NavItem from '../components/NavItem'
import Header from '../components/Header'
import { categoryPath, storiesPath } from '../utils/RoutesHelper'

class HeaderContainer extends Component {
  render () {
    return (
      // <header>
      //   <div>
      //     <Header />
      //     <h1>
      //       <a onClick={this.openHome.bind(this)}>Mttrs - Read What Matters</a>
      //     </h1>
      //
          // <nav>
          //   <ul>
          //     {this.defaultItem}
          //     {this.categoriesItems}
          //   </ul>
          // </nav>
      //   </div>
      // </header>
      <div>
        <Header />
        <nav>
          <ul>
            {this.defaultItem}
            {this.categoriesItems}
          </ul>
        </nav>
      </div>
    )
  }

  get defaultItem () {
    return (
      <NavItem
        category={{name: 'Top Stories'}}
        isSelected={!this.props.currentCategory}
        onClick={this.openHome.bind(this)}
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
        onClick={this.openCategory.bind(this)}
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
const HeaderContainerWithData = graphql(Query)(HeaderContainer)
export default connect(mapStateToProps)(HeaderContainerWithData)
