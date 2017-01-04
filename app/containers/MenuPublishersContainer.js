import React, { PropTypes } from 'react'
import withQuery from './MenuPublishersContainer.gql'
import MenuPublishers from '../components/MenuPublishers'

const MenuPublishersContainer = ({data, closeMenu}) => {
  if (data.loading) return null
  return (
    <MenuPublishers closeMenu={closeMenu} publishers={data.publishers} />
  )
}

MenuPublishersContainer.propTypes = {
  data: PropTypes.object.isRequired,
  closeMenu: PropTypes.func.isRequired
}

export default withQuery(MenuPublishersContainer)
