import React, { PropTypes, Component } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
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
    const { categorySlug, tags, intl } = this.props
    return (
      <div ref={this.ref} className={styles.container} style={this.containerStyle}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Tag tag={{ name: intl.formatMessage(messages.highlights), slug: '' }} categorySlug={categorySlug} />
          </li>
          {tags.map((tag, idx) => (
            <li key={`tag_${idx}`} className={styles.item}>
              <Tag tag={tag} categorySlug={categorySlug} />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  ref (component) {
    return this.tagsList = component
  }

  get containerStyle () {
    if (!this.tagsList) return null
    const menuSize = 240
    const mainSectionWidth = this.tagsList.clientWidth - menuSize
    if (mainSectionWidth < this.tagsList.scrollWidth) {
      return { justifyContent: 'center' }
    }
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
