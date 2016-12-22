import React, { PropTypes } from 'react'
import withQuery from './MenuPublishersContainer.gql'
import MenuPublishers from '../components/MenuPublishers'

const MenuPublishersContainer = ({data}) => {
  if (data.loading) return null
  return (
    <MenuPublishers publishers={data.publishers} />
  )
}

MenuPublishersContainer.propTypes = {
  data: PropTypes.object.isRequired
}

export default withQuery(MenuPublishersContainer)
