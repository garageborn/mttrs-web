import React, { PropTypes } from 'react'

import withQuery from './PublishersListContainer.gql'
import PublishersList from '../components/PublishersList'

const PublishersListContainer = ({type, data, closeMenu}) => {
  if (data.loading) return null
  return (
    <PublishersList
      type={type}
      closeMenu={closeMenu}
      publishers={data.publishers}
    />
  )
}

PublishersListContainer.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object.isRequired,
  closeMenu: PropTypes.func
}

export default withQuery(PublishersListContainer)
