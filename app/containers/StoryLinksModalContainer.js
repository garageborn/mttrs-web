import React, { Component, PropTypes } from 'react'
import withQuery from './StoryLinksModalContainer.gql'
import StoryLinksModal from '../components/StoryLinksModal'

class StoryLinksModalContainer extends Component {
  render () {
    return <StoryLinksModal data={this.props.data} />
  }
}

StoryLinksModalContainer.propTypes = {
  data: PropTypes.object.isRequired,
  publisherSlug: PropTypes.string,
  story: PropTypes.shape({
    id: PropTypes.any.isRequired
  }).isRequired
}

export default withQuery(StoryLinksModalContainer)
