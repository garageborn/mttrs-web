import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './styles.css'
import { linkPath } from '../../utils/RoutesHelper'

const StoryTitle = ({mainLink, handleVisitedStory}) => {
  return (
    <Link to={linkPath(mainLink.slug)} target='_blank'>
      <h3 className={styles.title}>
        {mainLink.title}
      </h3>
    </Link>
  )
}

StoryTitle.propTypes = {
  mainLink: PropTypes.object.isRequired,
  handleVisitedStory: PropTypes.func.isRequired
}

export default StoryTitle
