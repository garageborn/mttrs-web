import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import Headline from './components/Headline'
import Logo from './components/Logo'
import Summary from './components/Summary'
import Footer from './components/Footer'
import styles from './styles.css'

const charsTreshold = 200

class StorySummary extends Component {
  constructor () {
    super()
    this.toggleExpandSummary = this.toggleExpandSummary.bind(this)
    this.state = {
      isExpanded: false
    }
  }

  componentWillUpdate (nextProps, nextState) {
    let summaryElement = findDOMNode(this)
    let storyElement = summaryElement.parentNode
    let willChangeExpandedState = (this.state.isExpanded !== nextState.isExpanded)
    if (willChangeExpandedState) {
      this.handleScroll(storyElement)
    }
  }

  handleScroll (storyElement) {
    if (window.scrollY < storyElement.offsetTop) return
    return window.scrollTo(0, storyElement.offsetTop)
  }

  bigSummary () {
    return this.props.story.summary.length > charsTreshold
  }

  summary (story) {
    return story.summary
  }

  showFooter () {
    const { isVisited } = this.props
    if (!this.bigSummary()) return
    return <Footer isVisited={isVisited} isSummaryExpanded={this.state.isExpanded} />
  }

  toggleExpandSummary () {
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }

  getBoxStyles () {
    if (this.state.isExpanded) return styles.box
    return styles.boxNotExpanded
  }

  render () {
    const { story, isVisited } = this.props
    return (
      <div onClick={this.toggleExpandSummary} className={styles.container}>
        <div className={this.getBoxStyles()}>
          <div className={styles.headlineContainer}>
            <Logo isVisited={isVisited} />
            <Headline isVisited={isVisited} headline={story.headline} />
          </div>
          <Summary isVisited={isVisited}>{this.summary(story)}</Summary>
          {this.showFooter()}
        </div>
      </div>
    )
  }
}

StorySummary.propTypes = {
  story: PropTypes.object.isRequired,
  isVisited: PropTypes.bool.isRequired
}

export default StorySummary
