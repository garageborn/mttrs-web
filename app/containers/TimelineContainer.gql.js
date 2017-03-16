import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import _isArray from 'lodash/isArray'

const defaultVariables = {
  cursor: null,
  limit: 16,
  categorySlug: '',
  publisherSlug: ''
}

const Query = gql`
  query($cursor: Int, $timezone: String, $type: String, $limit: Int!, $categorySlug: String, $publisherSlug: String) {
    timeline(cursor: $cursor, timezone: $timezone, type: $type, limit: $limit, category_slug: $categorySlug, publisher_slug: $publisherSlug) {
      date
      stories {
        id
        total_social
        headline
        summary
        main_category { name color slug }
        main_link(publisher_slug: $publisherSlug) {
          title
          url
          slug
          image_source_url
          publisher { name display_name icon_id slug restrict_content }
        }
        other_links_count
      }
    }
  }
`

const infiniteScroll = ({ fetchMore, variables, timeline }) => {
  const items = timelineToItems(timeline)
  if (!hasMore(items)) return

  const lastItem = items[items.length - 1]

  return fetchMore({
    variables: { ...variables, cursor: lastItem.date },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult.data) return previousResult

      const previousTimeline = timelineToItems(previousResult.timeline)
      const nextTimeline = fetchMoreResult.data.timeline
      return { timeline: previousTimeline.concat(nextTimeline) }
    }
  })
}

const hasMore = (items) => {
  const lastItem = items[items.length - 1]
  return lastItem && lastItem.stories && lastItem.stories.length > 0
}

const timelineToItems = (timeline) => {
  if (!timeline) return []
  return _isArray(timeline) ? timeline : [timeline]
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
      const { error, loading, timeline, variables } = data
      const items = timelineToItems(timeline)

      return {
        data: {
          loading,
          error,
          variables,
          items,
          hasMore: hasMore(items),
          infiniteScroll: infiniteScroll.bind(this, data)
        }
      }
    }
  })(TimelineContainer)
}
