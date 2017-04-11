import React, { PropTypes, Component } from 'react'
import TagsList from '../../components/TagsList'
import withQuery from './index.gql'

class TagsContainer extends Component {
  render () {
    const { data } = this.props
    if (data.loading) return null
    return (
      <TagsList tags={data.tags} />
    )
  }
}

export default withQuery(TagsContainer)
