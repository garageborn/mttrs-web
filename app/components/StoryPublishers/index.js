import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import StoryPublishersCounter from '../StoryPublishersCounter'
import StoryPublishersItem from '../StoryPublishersItem'
import StoryPublishersList from '../StoryPublishersList'
import styles from './styles.css'

const StoryPublishers = ({ story, handleStoryLinks }) => {
  const renderCounter = () => {
    let shownPublishersCount = 5
    // if (smallDevice) shownPublishersCount = 3
    const otherLinksCount = story.links_count - shownPublishersCount
    return <StoryPublishersCounter count={otherLinksCount} />
  }

  const renderPublisher = (publisher, restricted) => {
    if (!publisher.icon.medium) return null
    const uri = publisher.icon.medium
    return <StoryPublishersItem key={publisher.id} publisher={publisher} />
  }

  const publishers = () => {
    let { publishers } = story
    if (publishers.length === 1 && publishers[0].restrict_content) return renderPublisher(publishers[0], true)
    // if (smallDevice) publishers = publishers.slice(0, 3)
    return publishers.map((publisher) => renderPublisher(publisher, false))
  }

  const renderPublishers = () => <StoryPublishersList publishers={publishers()} />

  const renderSingle = () => (
    <Link to={story.main_link.publisher.slug} className={styles.container}>
      {renderCounter()}
      {renderPublishers()}
    </Link>
  )

  const renderMultiple = () => (
    <div onClick={() => handleStoryLinks(story)} className={styles.container}>
      {renderCounter()}
      {renderPublishers()}
    </div>
  )

  const render = () => {
    if (story.publishers.length === 1) return renderSingle()
    return renderMultiple()
  }

  return (
    {render}
  )
}

StoryPublishers.propTypes = {
  story: PropTypes.shape({
    publishers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.shape({
          xsmall: PropTypes.string
        })
      })
    ).isRequired,
    links_count: PropTypes.number.isRequired
  }).isRequired
}

export default StoryPublishers
