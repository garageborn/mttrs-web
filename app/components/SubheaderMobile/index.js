import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import Logo from '../Logo'
import Arrow from '../Arrow'
import PublisherIcon from '../PublisherIcon'
import CategoryIcon from '../CategoryIcon'
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
  let getLogo = () => {
    switch (section.type) {
      case 'publisher':
        let publisher = {
          name: section.model.name,
          icon_id: section.model.icon_id
        }
        return <PublisherIcon publisher={publisher} size='small' />
      case 'category':
        let category = {
          name: section.model.name,
          icon_id: section.model.icon_id
        }
        return <CategoryIcon category={category} size='big' />
      default:
        return <Logo type='mobile' />
    }
  }

  return (
    <div className={styles.container}>
      {getLogo()}
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
