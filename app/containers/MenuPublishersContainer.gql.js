import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Query = gql`query { publishers(order_by_name: true) { id name slug icon_id }  }`

export default function (MenuPublishersContainer) {
  return graphql(Query)(MenuPublishersContainer)
}
