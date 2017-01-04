import React, { PropTypes } from 'react'
import withQuery from './MenuCategoriesContainer.gql'
import MenuCategories from '../components/MenuCategories'

const MenuCategoriesContainer = ({data, closeMenu}) => {
  if (data.loading) return null
  return (
    <MenuCategories closeMenu={closeMenu} categories={data.categories} />
  )
}

MenuCategoriesContainer.propTypes = {
  data: PropTypes.object.isRequired,
  closeMenu: PropTypes.func.isRequired
}

export default withQuery(MenuCategoriesContainer)
