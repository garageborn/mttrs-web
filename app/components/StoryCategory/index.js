import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import { categoryPath } from '../../utils/RoutesHelper'
import styles from './styles.css'

const StoryCategory = ({ category, isVisited }) => {
  let style = {
    color: category.color
  }

  let labelStyles = classNames({
    [styles.label]: true,
    [styles.isVisited]: isVisited
  })

  return (
    <div className={styles.text}>
      <Link to={categoryPath(category.slug)} style={style} className={labelStyles}>
        {category.name}
      </Link>
    </div>
  )
}

StoryCategory.propTypes = {
  category: PropTypes.object.isRequired,
  isVisited: PropTypes.bool.isRequired
}

export default StoryCategory
