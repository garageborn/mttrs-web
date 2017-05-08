import React, { PropTypes, Component } from 'react'
import TagsList from '../../components/TagsList'
import withQuery from './index.gql'

class TagsContainer extends Component {
  render () {
    const { data, slug } = this.props
    if (data.loading) return null
    return <TagsList tags={data.tags} categorySlug={slug} />
  }
}

TagsContainer.propTypes = {
  data: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
}

export default withQuery(TagsContainer)
