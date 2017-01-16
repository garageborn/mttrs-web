import React, { PropTypes } from 'react'
import withQuery from './PublishersListContainer.gql'
import PublishersList from '../components/PublishersList'

const PublishersListContainer = ({data, closeMenu}) => {
  if (data.loading) return null
  return (
    <PublishersList closeMenu={closeMenu} publishers={data.publishers} />
  )
}

PublishersListContainer.propTypes = {
  data: PropTypes.object.isRequired,
  closeMenu: PropTypes.func.isRequired
}

export default withQuery(PublishersListContainer)
