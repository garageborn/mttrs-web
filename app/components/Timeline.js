import React, {Component, PropTypes} from 'react'
import StoryList from './StoryList'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

const Timeline = (props) => {
  if (props.data.loading) return <div className='loading'>Hang on...</div>
  return (
    <main>
      {props.data.timeline.map((item) => <StoryList key={item.date} date={item.date} stories={item.stories} />)}
    </main>
  )
}

Timeline.propTypes = {
  data: PropTypes.object.isRequired
}

const Query = gql`
  query($days: Int!, $offset: Int, $timezone: String, $perDay: Int!, $categorySlug: String, $publisherSlug: String) {
    timeline(days: $days, offset: $offset, timezone: $timezone) {
      date
      stories(limit: $perDay, popular: true, category_slug: $categorySlug, publisher_slug: $publisherSlug) {
        id
      }
    }
  }
`

const defaultVariables = {
  days: 7,
  offset: 0,
  perDay: 10,
  categorySlug: '',
  publisherSlug: '',
  timezone
}

const TimelineWithData = graphql(Query, {
  options(props) {
    return {
      variables: {
        ...defaultVariables
      }
    }
  },
  props({ data }) {
    return {
      data: {
        ...data
      }
    }
  }
})(Timeline)
export default TimelineWithData
