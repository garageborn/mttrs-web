import React, { PropTypes } from 'react'

import withQuery from './PublishersListContainer.gql'
import PublishersList from '../components/PublishersList'

const PublishersListContainer = ({type, data}) => {
  if (data.loading) return null
  return (
    <PublishersList
      type={type}
      publishers={data.publishers}
    />
  )
}

PublishersListContainer.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object.isRequired
}

export default withQuery(PublishersListContainer)
