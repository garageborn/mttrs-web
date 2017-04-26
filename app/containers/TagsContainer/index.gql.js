import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Query = gql`
  query($categorySlug:String!) {
    tags(with_recent_stories: true, category_slug:$categorySlug) {
      name
      slug
    }
  }
`

export default function (TagsContainer) {
  return graphql(Query, {
    options (props) {
      return {
        variables: {
          categorySlug: props.slug
        }
      }
    }
  })(TagsContainer)
}
