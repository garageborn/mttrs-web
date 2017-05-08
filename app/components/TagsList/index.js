import React, { PropTypes, Component } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import classNames from 'classnames'
import Tag from '../Tag'
import styles from './styles.css'

const messages = defineMessages({
  highlights: { id: 'tags.highlights' }
})

class TagsList extends Component {
  constructor () {
    super()
    this.ref = this.ref.bind(this)
  }

  render () {
    return (
      <div ref={this.ref} className={this.containerStyles}>
        <ul className={styles.list}>
          {this.renderHighlights()}
          {this.renderTags()}
        </ul>
      </div>
    )
  }

  ref (component) {
    return this.tagsList = component
  }

  renderHighlights () {
    const { categorySlug, intl } = this.props
    return (
      <li className={styles.item}>
        <Tag tag={{ name: intl.formatMessage(messages.highlights), slug: '' }} categorySlug={categorySlug} />
      </li>
    )
  }

  renderTags (tag, idx) {
    const { categorySlug, tags } = this.props
    return tags.map((tag, idx) => (
      <li key={`tag_${idx}`} className={styles.item}>
        <Tag tag={tag} categorySlug={categorySlug} />
      </li>
    ))
  }

  get containerStyles () {
    if (!this.tagsList) return styles.container
    const menuSize = 240
    const mainSectionWidth = this.tagsList.clientWidth - menuSize

    return classNames({
      [styles.container]: true,
      [styles.center]: mainSectionWidth < this.tagsList.scrollWidth
    })
  }
}

TagsList.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  tags: PropTypes.array.isRequired,
  categorySlug: PropTypes.string.isRequired
}

export default injectIntl(TagsList)
