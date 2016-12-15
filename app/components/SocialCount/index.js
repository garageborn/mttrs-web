import React, { PropTypes } from 'react'

const StorySocialCount = ({totalSocial}) => {
  return <p>{totalSocial}</p>
}

StorySocialCount.propTypes = {
  totalSocial: PropTypes.number.isRequired,
}

export default StorySocialCount
