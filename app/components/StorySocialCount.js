import React, { PropTypes } from 'react'

const StorySocialCount = ({totalSocial}) => {
  return <sup>{totalSocial}</sup>
}

StorySocialCount.propTypes = {
  totalSocial: PropTypes.number.isRequired
}

export default StorySocialCount
