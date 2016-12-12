import React, {Component, PropTypes} from 'react'
import StoryList from './StoryList'
import { injectIntl, defineMessages } from 'react-intl'
const messages = defineMessages({
  headerTitle: {
    id: 'header.title',
    defaultMessage: 'Top Stories'
  }
})

class Timeline extends Component {
  render () {
    const {items, isFetching} = this.props
    if (isFetching) return (<div className='loading'>Hang on...</div>)
    const { formatMessage } = this.props.intl
    let title = formatMessage(messages.headerTitle)

    return (
      <main>
        <h1>{title}</h1>
        {items.map((item) => {
          return <StoryList key={item.date} date={item.date} stories={item.stories} />
        })}
      </main>
    )
  }
}

Timeline.propTypes = {
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default injectIntl(Timeline)
