import React, { PropTypes } from 'react'
import withQuery from './MenuCategoriesContainer.gql'
import MenuCategories from '../components/MenuCategories'

const MenuCategoriesContainer = ({data}) => {
  if (data.loading) return null
  return (
    <MenuCategories categories={data.categories} />
  )
}

MenuCategoriesContainer.propTypes = {
  data: PropTypes.object.isRequired
}

export default withQuery(MenuCategoriesContainer)
