import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import Arrow from '../Arrow'
import styles from './styles.css'
import classNames from 'classnames'

const messages = defineMessages({
  topStories: {
    id: 'header.topStories',
    defaultMessage: 'Top Stories'
  }
})

const SubheaderMobile = ({section, intl}) => {
  let getTextClassNames = () => {
    return classNames({
      [styles.text]: true,
      [styles.categoryText]: section.type === 'category'
    })
  }

  let getText = () => {
    if (section.type !== 'home') {
      return section.model.name
    }
    return intl.formatMessage(messages.topStories)
  }

  return (
    <div className={styles.container}>
      <span className={getTextClassNames()}>{getText()}</span>
      <Arrow />
    </div>
  )
}

SubheaderMobile.propTypes = {
  section: PropTypes.object.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(SubheaderMobile)
