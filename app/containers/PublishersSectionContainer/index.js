import React, { PropTypes } from 'react'
import withQuery from './index.gql'
import PublishersSection from '../../components/PublishersSection'

const PublishersSectionContainer = ({ type, data }) => (
  <PublishersSection
    type={type}
    loading={data.loading}
    publishers={data.publishers}
  />
)

PublishersSectionContainer.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object.isRequired
}

export default withQuery(PublishersSectionContainer)
