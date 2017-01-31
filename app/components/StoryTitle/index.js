import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { linkPath } from '../../utils/RoutesHelper'
import styles from './styles.css'

const StoryTitle = ({mainLink}) => {
  return (
    <Link to={linkPath(mainLink.slug)} target='_blank'>
      <h3 className={styles.title}>
        {mainLink.title}
      </h3>
    </Link>
  )
}

StoryTitle.propTypes = {
  mainLink: PropTypes.object.isRequired
}

export default StoryTitle
