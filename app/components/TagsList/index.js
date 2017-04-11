import React, { PropTypes, Component } from 'react'
import Tag from '../Tag'
import styles from './styles.css'

class TagsList extends Component {
  render () {
    let { tags, categorySlug } = this.props
    return (
      <ul className={styles.container}>
        <Tag tag={{ name: 'Destaques', slug: '' }} categorySlug={categorySlug} />
        {tags.map((tag, idx) => (
          <Tag key={`tag_${idx}`} tag={tag} categorySlug={categorySlug} />
        ))}
      </ul>
    )
  }
}

TagsList.propTypes = {
  tags: PropTypes.array.isRequired,
  categorySlug: PropTypes.string.isRequired
}

export default TagsList
