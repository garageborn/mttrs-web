import React, { Component, PropTypes } from 'react'
import PublisherTag from '../PublisherTag'
import {publisherPath} from '../../utils/RoutesHelper'
import ParseDate from '../../common/utils/ParseDate'
import moment from '../../common/utils/Moment'

class StoryMetadata extends Component {
  renderPublishers() {
    if (this.props.otherLinks.length === 0) return this.props.mainLink.publisher.name
    if (this.props.otherLinks.length === 1) return `${this.props.mainLink.publisher.name} and 1 other`
    return `${this.props.mainLink.publisher.name} and ${this.props.otherLinks.length} others`
  }
  render() {
    return (
      <div>
        @{ParseDate(moment(this.props.mainLink.published_at).unix())} from {this.renderPublishers()}
      </div>
    )
  }
}

StoryMetadata.propTypes = {
  mainLink: PropTypes.object.isRequired,
  otherLinks: PropTypes.array
}

export default StoryMetadata
