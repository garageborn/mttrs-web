import React, { PropTypes } from 'react'
import styles from './styles.css'

const StoryCategory = ({category}) => {
  let style = {
    color: category.color
  }
  return (
    <div className={styles.text}>
      in <span style={style} className={styles.label}>{category.name}</span>
    </div>
  )
}

StoryCategory.propTypes = {
  category: PropTypes.object.isRequired
}

export default StoryCategory
