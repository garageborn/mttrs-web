import React, { PropTypes, Component } from 'react'
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

  bigSummary () {
    return this.props.story.summary.length > charsTreshold
  }

  summary (story) {
    if (this.bigSummary() && !this.state.isExpanded) return story.summary.slice(0, 200)
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

  render () {
    const { story } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.triangleContainer}>
          <div className={styles.outerTriangle} />
          <div className={styles.innerTriangle} />
        </div>
        <div className={styles.box}>
          <div className={styles.headlineContainer}>
            👔
          <span className={styles.headline}>{story.headline.toUpperCase()}</span>
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
