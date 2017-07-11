import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import dpr from '../utils/Dpr'

const Query = gql`
  query($dpr: Int, $id: ID!, $publisherSlug: String) {
    story(id: $id) {
      main_link(publisher_slug: $publisherSlug) {
        id
        title
        url
        slug
        total_social
        publisher {
          name
          display_name
          slug
          icon(dpr: $dpr) { medium }
          restrict_content
        }
      }
      other_links(publisher_slug: $publisherSlug, popular: true) {
        id
        title
        url
        slug
        total_social
        publisher {
          name
          display_name
          slug
          icon(dpr: $dpr) { medium }
          restrict_content
        }
      }
    }
  }
`

export default function (MenuCategoriesContainer) {
  return graphql(Query, {
    options (props) {
      return {
        variables: {
          id: props.story.id,
          publisherSlug: props.publisherSlug,
          dpr: dpr
        }
      }
    }
  })(MenuCategoriesContainer)
}
