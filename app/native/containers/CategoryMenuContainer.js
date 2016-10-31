import React, { Component } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import CategoryTile from '../components/CategoryTile'
import styles from '../styles/Menu'
import { NavigationActions, MenuActions } from '../actions/index'
import { DARK_TRANSPARENT_COLOR } from '../../constants/TouchUnderlayColors'

class CategoryMenuContainer extends Component {
  constructor(props) {
    super(props)
    this.openHome = this.openHome.bind(this)
    this.openCategory = this.openCategory.bind(this)
  }

  render() {
    return (
      <View>
        <View style={styles.topStoriesContainer}>
          <TouchableHighlight underlayColor={DARK_TRANSPARENT_COLOR} onPress={this.openHome}>
            <View style={styles.topStories} shadowOffset={{width: 0, height: 2}} shadowColor={'rgba(0, 0, 0, 1)'} shadowOpacity={.5} elevation={1}>
              <Image style={styles.topStoriesIcon} source={require('../assets/icons/icon-top-stories.png')} />
              <Text style={styles.topStoriesTitle}>Top Stories</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.categories}>
          { this.renderCategories() }
        </View>
      </View>
    )
  }

  renderCategories() {
    const { params } = this.props
    const { categories, loading } = this.props.data

    if (loading) return
    return categories.map((category) => {
      let isActive = false
      if (params.section != null && typeof params.section.model !== 'undefined')
        isActive = category.slug === params.section.model.slug

      return (
        <CategoryTile key={category.id} category={category} onPress={this.openCategory} isActive={isActive}/>
      )
    }, this)
  }

  openHome() {
    this.props.dispatch(NavigationActions.home())
    this.props.dispatch(MenuActions.closeMenu())
  }

  openCategory(category) {
    this.props.dispatch(NavigationActions.selectCategory(category))
    this.props.dispatch(MenuActions.closeMenu())
  }
}

const Query = gql`query { categories { id name slug color icon_id } }`
const CategoryMenuContainerWithData = graphql(Query)(CategoryMenuContainer)
export default connect()(CategoryMenuContainerWithData)
