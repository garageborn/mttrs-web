import React, { PropTypes, Component } from 'react'
import StoryImage from '../StoryImage'
import StoryContent from '../StoryContent'
import styles from './styles.css'

class StoryMainContent extends Component {
  constructor () {
    super()

    this.handleMouseOver = this.handleMouseOver.bind(this)

    this.state = {
      active: false
    }
  }

  render () {
    let { story, mainLink, category, isVisited } = this.props

    return (
      <div className={styles.container} >
        <StoryImage
          story={story}
          mainLink={mainLink}
          handleMouseOver={this.handleMouseOver}
          active={this.state.active}
        />
        <StoryContent
          handleMouseOver={this.handleMouseOver}
          mainLink={mainLink}
          category={category}
          active={this.state.active}
          isVisited={isVisited}
        />
      </div>
    )
  }

  handleMouseOver (mouseOver) {
    this.setState({ active: mouseOver })
  }
}

StoryMainContent.propTypes = {
  story: PropTypes.object.isRequired,
  mainLink: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
  isVisited: PropTypes.bool.isRequired
}

export default StoryMainContent
