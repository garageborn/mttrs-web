import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { UIActions } from '../actions/index'
import StoryLink from '../components/StoryLink'

class StoryLinkContainer extends Component {
  constructor () {
    super()
    this.closeModal = this.closeModal.bind(this)
  }
  closeModal () {
    const { dispatch } = this.props
    dispatch(UIActions.closeModal())
  }
  render () {
    let {key, type, storyLink} = this.props
    return (
      <StoryLink
        key={key}
        type={type}
        storyLink={storyLink}
        closeModal={this.closeModal}
      />
    )
  }
}

StoryLinkContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  key: PropTypes.number,
  type: PropTypes.string.isRequired,
  storyLink: PropTypes.object.isRequired
}

export default connect()(StoryLinkContainer)
