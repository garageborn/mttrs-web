import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Query = gql`
query {
  categories(with_stories: true, ordered: true) {
    color
    id
    name
    slug
  }
}
`

export default function (MenuCategoriesContainer) {
  return graphql(Query)(MenuCategoriesContainer)
}
