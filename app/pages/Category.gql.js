import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Query = gql`
  query($slug: String!) {
    category(slug: $slug) { id name slug color icon_id }
  }
`

export default function (Category) {
  return graphql(Query, {
    options (props, ownProps) {
      return {
        variables: { slug: props.route.slug }
      }
    }
  })(Category)
}
