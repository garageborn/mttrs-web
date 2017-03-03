import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
import Icon from './assets/icon.svg'
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
    let summaryElement = ReactDOM.findDOMNode(this)
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
    if (!this.bigSummary()) return
    return this.renderFooter()
  }

  renderFooter () {
    if (this.state.isExpanded) {
      return (
        <div className={styles.footer}>
          <div onClick={this.toggleExpandSummary} className={styles.button}>
            <div className={styles.buttonText}>show less</div>
            <div className={styles.showLessTriangle} />
          </div>
        </div>
      )
    } else {
      return (
        <div className={styles.footerWithGradient}>
          <div className={styles.gradient} />
          <div onClick={this.toggleExpandSummary} className={styles.button}>
            <div className={styles.buttonText}>show more</div>
            <div className={styles.showMoreTriangle} />
          </div>
        </div>
      )
    }
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
    const { story } = this.props
    return (
      <div className={styles.container}>
        <div className={this.getBoxStyles()}>
          <div className={styles.headlineContainer}>
            <div className={styles.logoContainer}>
              <Icon />
            </div>
            <div>
              <p className={styles.headline}>{story.headline.toUpperCase()}</p>
            </div>
          </div>
          <div className={styles.text}>{this.summary(story)}</div>
          {this.showFooter()}
        </div>
      </div>
    )
  }
}

StorySummary.propTypes = {
  story: PropTypes.object.isRequired
}

export default StorySummary
