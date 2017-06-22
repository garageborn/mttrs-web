/* eslint-disable react/jsx-no-bind */
import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import { linkPath } from '../../utils/RoutesHelper'
import styles from './styles.css'

const StoryTitle = ({ mainLink, handleMouseOver, active }) => {
  let textClass = classNames({
    [styles.title]: true,
    [styles.active]: active
  })

  return (
    <Link
      to={linkPath(mainLink.slug)}
      target='_blank'
      onMouseOver={() => handleMouseOver(true)}
      onMouseOut={() => handleMouseOver(false)}
      itemProp='url'
    >
      <h1 className={textClass} itemProp='name'>{mainLink.title}</h1>
    </Link>
  )
}

StoryTitle.propTypes = {
  mainLink: PropTypes.object.isRequired,
  handleMouseOver: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

export default StoryTitle
