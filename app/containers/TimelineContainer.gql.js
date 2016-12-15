import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

const defaultVariables = {
  days: 7,
  offset: 0,
  perDay: 10,
  categorySlug: '',
  publisherSlug: '',
  timezone
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
          title
          url
          total_social
          image_source_url
          publisher { name slug icon_id }
        }
        other_links(publisher_slug: $publisherSlug, popular: true) {
          title
          url
          total_social
          publisher { name slug icon_id }
        }
      }
    }
  }
`

export default function(TimelineContainer) {
  return graphql(Query, {
    options(props, ownProps) {
      return {
        variables: {
          ...defaultVariables,
          categorySlug: props.section.type === 'category' ? props.section.model.slug : '',
          publisherSlug: props.section.type === 'publisher' ? props.section.model.slug : ''
        }
      }
    },
    props({ data }) {
      return {
        data: { ...data }
      }
    }
  })(TimelineContainer)
}
