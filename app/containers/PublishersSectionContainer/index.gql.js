import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Query = gql`
query {
  publishers(with_stories: true, order_by_name: true) {
    icon {
      medium
    }
    id
    name
    display_name
    slug
  }
}
`

export default function (MenuPublishersContainer) {
  return graphql(Query)(MenuPublishersContainer)
}
