import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const defaultVariables = {
  days: 7,
  offset: 0,
  perDay: 10,
  categorySlug: '',
  publisherSlug: ''
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
          slug
          total_social
          image_source_url
          publisher { name slug icon_id }
        }
        other_links_count
      }
    }
  }
`

const infiniteScroll = ({ fetchMore, variables, timeline }) => {
  return fetchMore({
    variables: { ...variables, days: 1, offset: timeline.length },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult.data) { return previousResult }
      return Object.assign({}, previousResult, {
        timeline: [...previousResult.timeline, ...fetchMoreResult.data.timeline]
      })
    }
  })
}

export default function (TimelineContainer) {
  return graphql(Query, {
    options (props) {
      return {
        variables: {
          ...defaultVariables,
          ...{timezone: props.settings.timezone},
          ...props.queryVariables
        }
      }
    },
    props ({data}) {
      return {
        data: {
          ...data,
          infiniteScroll: infiniteScroll.bind(this, data)
        }
      }
    }
  })(TimelineContainer)
}
