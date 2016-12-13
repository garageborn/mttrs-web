import React, {Component, PropTypes} from 'react'
import moment from '../common/utils/Moment'
import ComponentsJoiner from '../utils/ComponentsJoiner'
import PublisherTag from '../components/PublisherTag'
import * as cloudinary from '../common/utils/Cloudinary'
import {publisherPath} from '../utils/RoutesHelper'
import ParseDate from '../common/utils/ParseDate'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class StoryContainer extends Component {
  render() {
    const {story} = this.props.data
    return (
      <div className='story'>
        <a href={this.mainLink.url} target='_blank'>{this.renderImage()}</a>
        <div className='story-text'>
          <h3>
            <a href={this.mainLink.url} target='_blank'>{this.mainLink.title}</a>
            <sup>({story.total_social})</sup>
          </h3>
          { this.renderStoryInfo() }
        </div>
      </div>
    )
  }

  renderImage() {
    if (!this.mainLink.image_source_url) return
    let options = { type: 'fetch', width: 200, height: 200, crop: 'fit', secure: true }
    return (<img alt={this.mainLink.title} src={cloudinary.url(this.mainLink.image_source_url, options)} />)
  }

  renderStoryInfo() {
    return (
      <div>
        @{ParseDate(moment(this.mainLink.published_at).unix())}
        <i> from </i> {this.renderPublishers()}
      </div>
    )
  }

  renderPublishers() {
    let links = [this.mainLink].concat(this.otherLinks)

    let publishers = links.map((link) => {
      let props = { url: link.url, title: link.title, name: link.publisher.name }
      return <PublisherTag {...props} />
    })

    return (
      <div className='story-publishers'>{ComponentsJoiner(publishers)}</div>
    )
  }

  get mainLink() {
    return this.props.data.story.main_link
  }

  get otherLinks() {
    return this.props.data.story.other_links
  }
}

StoryContainer.propTypes = {
  story: PropTypes.object.isRequired
}

const Query = gql`
  query($id: ID!, $publisherSlug: String) {
    story(id: $id) {
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
`

const StoryContainerWithData = graphql(Query, {
  options(props) {
    return {
      variables: {
        id: props.story.id,
        publisherSlug: props.publisherSlug
      }
    }
  }
})(StoryContainer)

export default StoryContainerWithData
