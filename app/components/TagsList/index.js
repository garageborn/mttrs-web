import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import Tag from '../Tag'
import styles from './styles.css'

const messages = defineMessages({
  highlights: { id: 'tags.highlights' }
})

const TagsList = ({ tags, categorySlug, intl }) => (
  <div className={styles.container}>
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

TagsList.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  tags: PropTypes.array.isRequired,
  categorySlug: PropTypes.string.isRequired
}

export default injectIntl(TagsList)
