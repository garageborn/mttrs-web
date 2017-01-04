import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './styles.css'

const StoryCategory = ({category}) => {
  let style = {
    backgroundColor: category.color
  }
  return (
    <Link to={category.slug} className={styles.container}>
      <div style={style} className={styles.label}>
        {category.name}
      </div>
    </Link>
  )
}

StoryCategory.propTypes = {
  category: PropTypes.object.isRequired
}

export default StoryCategory
