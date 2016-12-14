import React, { PropTypes } from 'react'
import ParseDate from '../../common/utils/ParseDate'

const StoryListHeader = ({date}) => {
  return <h2>{ParseDate(date)}</h2>
}

StoryListHeader.propTypes = {
  date: PropTypes.number.isRequired,
}

export default StoryListHeader
