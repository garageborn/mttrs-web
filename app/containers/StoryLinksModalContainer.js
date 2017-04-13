import React, { PropTypes } from 'react'
import withQuery from './StoryLinksModalContainer.gql'
import StoryLinksModal from '../components/StoryLinksModal'

const StoryLinksModalContainer = ({ data }) => (
  <StoryLinksModal data={data} />
)

StoryLinksModalContainer.propTypes = {
  data: PropTypes.object.isRequired
}

export default withQuery(StoryLinksModalContainer)
