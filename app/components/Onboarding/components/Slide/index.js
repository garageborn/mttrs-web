import React, { PropTypes } from 'react'

const Slide = ({ children }) => (
  <div>
    {children}
  </div>
)

Slide.propTypes = {
  children: PropTypes.any.isRequired
}

export default Slide
