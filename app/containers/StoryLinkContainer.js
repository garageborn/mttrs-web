import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { UIActions, StorageActions } from '../actions/index'
import StoryLink from '../components/StoryLink'

class StoryLinkContainer extends Component {
  constructor () {
    super()
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal () {
    const { dispatch, story } = this.props
    dispatch(UIActions.closeModal())
    dispatch(StorageActions.addVisitedStory(story))
  }

  render () {
    let { story, key, type, storyLink } = this.props
    return (
      <StoryLink
        key={key}
        type={type}
        story={story}
        storyLink={storyLink}
        closeModal={this.closeModal}
      />
    )
  }
}

StoryLinkContainer.propTypes = {
  story: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  key: PropTypes.number,
  type: PropTypes.string.isRequired,
  storyLink: PropTypes.object.isRequired
}

export default connect()(StoryLinkContainer)
