import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { categoryPath } from '../../utils/RoutesHelper'
import styles from './styles.css'

const StoryCategory = ({category}) => {
  let style = {
    color: category.color
  }
  return (
    <div className={styles.text}>
      in <Link to={categoryPath(category.slug)} style={style} className={styles.label}>{category.name}</Link>
    </div>
  )
}

StoryCategory.propTypes = {
  category: PropTypes.object.isRequired
}

export default StoryCategory
