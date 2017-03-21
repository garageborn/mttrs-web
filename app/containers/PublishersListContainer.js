import React, { PropTypes } from 'react'
import withQuery from './PublishersListContainer.gql'
import PublishersList from '../components/PublishersList'

const PublishersListContainer = ({ type, data }) => (
  <PublishersList
    type={type}
    loading={data.loading}
    publishers={data.publishers}
  />
)

PublishersListContainer.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object.isRequired
}

export default withQuery(PublishersListContainer)
