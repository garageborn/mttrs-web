import React, { Component, PropTypes } from 'react'
import ComponentsJoiner from '../../utils/ComponentsJoiner'
import PublisherTag from '../PublisherTag'
import {publisherPath} from '../../utils/RoutesHelper'
import ParseDate from '../../common/utils/ParseDate'
import moment from '../../common/utils/Moment'

class StoryMetadata extends Component {
  renderPublishers() {
    let links = [this.props.mainLink].concat(this.props.otherLinks)

    let publishers = links.map((link) => {
      let props = { url: link.url, title: link.title, name: link.publisher.name }
      return <PublisherTag {...props} />
    })

    return (
      <div className='story-publishers'>{ComponentsJoiner(publishers)}</div>
    )
  }

  render() {
    return (
      <div>
        @{ParseDate(moment(this.props.mainLink.published_at).unix())}
        <i> from </i> {this.renderPublishers()}
      </div>
    )
  }
}

StoryMetadata.propTypes = {
  mainLink: PropTypes.object.isRequired,
  otherLinks: PropTypes.array
}

export default StoryMetadata
