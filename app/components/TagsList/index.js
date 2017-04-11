import React, { PropTypes, Component } from 'react'

class TagsList extends Component {
  render () {
    let { tags } = this.props
    return (
      <ul>
        {tags.map((item, idx) => <li key={`tag_${idx}`}>{item.name}</li>)}
      </ul>
    )
  }
}

TagsList.propTypes = {
  tags: PropTypes.array.isRequired
}

export default TagsList
