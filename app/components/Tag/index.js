import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { tagPath } from '../../utils/RoutesHelper'
import styles from './styles.css'

const Tag = ({ active, tag, categorySlug }) => {
  return (
    <Link
      to={tagPath(categorySlug, tag.slug)}
      itemProp='url'
      className={styles.container}
      activeClassName={styles.active}
    >
      {tag.name}
    </Link>
  )
}

Tag.propTypes = {
  active: PropTypes.bool,
  tag: PropTypes.object.isRequired,
  categorySlug: PropTypes.string.isRequired
}

export default Tag
