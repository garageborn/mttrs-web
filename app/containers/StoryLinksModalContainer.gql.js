import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Query = gql`
  query($id: ID!, $publisherSlug: String) {
    story(id: $id) {
      main_link(publisher_slug: $publisherSlug) {
        id
        title
        url
        slug
        total_social
        publisher { name display_name slug icon_id restrict_content }
      }
      other_links(publisher_slug: $publisherSlug, popular: true) {
        id
        title
        url
        slug
        total_social
        publisher { name display_name slug icon_id restrict_content }
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
          publisherSlug: props.publisherSlug
        }
      }
    }
  })(MenuCategoriesContainer)
}
