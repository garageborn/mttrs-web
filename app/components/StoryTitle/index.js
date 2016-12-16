import React, { PropTypes } from 'react'
import styles from './styles.css'
import Shiitake from 'shiitake'

const StoryTitle = ({mainLink}) => {
  return (
    <a href={mainLink.url} target='_blank'>
      <Shiitake lines={3} className={styles.title} throttleRate={200} tagName='h3'>
        {mainLink.title}
      </Shiitake>
    </a>
  )
}

StoryTitle.propTypes = {
  mainLink: PropTypes.object.isRequired
}

export default StoryTitle
