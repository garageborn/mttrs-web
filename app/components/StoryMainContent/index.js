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
    let { story, mainLink, shouldRenderCategory, category } = this.props

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
          shouldRenderCategory={shouldRenderCategory}
          category={category}
          active={this.state.active}
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
  shouldRenderCategory: PropTypes.bool.isRequired,
  category: PropTypes.object.isRequired
}

export default StoryMainContent
