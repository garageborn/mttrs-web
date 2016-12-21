import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Setup from '../config/Setup'

const defaultVariables = {
  days: 7,
  offset: 0,
  perDay: 10,
  categorySlug: '',
  publisherSlug: '',
  timezone: Setup.timezone
}

const Query = gql`
  query($days: Int!, $offset: Int, $timezone: String, $perDay: Int!, $categorySlug: String, $publisherSlug: String) {
    timeline(days: $days, offset: $offset, timezone: $timezone) {
      date
      stories(limit: $perDay, popular: true, category_slug: $categorySlug, publisher_slug: $publisherSlug) {
        id
        total_social
        headline
        summary
        main_category { name color slug }
        main_link(publisher_slug: $publisherSlug) {
          id
          title
          url
          total_social
          image_source_url
          publisher { name slug icon_id }
        }
        other_links(publisher_slug: $publisherSlug, popular: true) {
          id
          title
          url
          total_social
          publisher { name slug icon_id }
        }
      }
    }
  }
`

export default function (TimelineContainer) {
  return graphql(Query, {
    options (props) {
      console.log('---------query', defaultVariables)
      return {
        variables: {
          ...defaultVariables,
          ...props.queryVariables
        }
      }
    }
  })(TimelineContainer)
}
