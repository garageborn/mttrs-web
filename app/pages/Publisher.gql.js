import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Query = gql`
  query($slug: String!) {
    publisher(slug: $slug) { id name slug icon_id }
  }
`

export default function (Publisher) {
  return graphql(Query, {
    options (props, ownProps) {
      return {
        variables: { slug: props.route.slug }
      }
    }
  })(Publisher)
}
