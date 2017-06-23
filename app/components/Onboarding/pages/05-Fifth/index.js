import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import Slide from '../../components/Slide'
import SlideImage from '../../components/SlideImage'
import SlideContent from '../../components/SlideContent'
import Title from '../../components/Title'
import Caption from '../../components/Caption'

const messages = defineMessages({
  title: {
    id: 'onboarding.fifth.title'
  },
  caption: {
    id: 'onboarding.fifth.caption'
  }
})

const Sixth = ({ intl }) => {
  let images = {
    small: require(`./assets/${intl.locale}-5.png`),
    notSmall: require(`./assets/${intl.locale}-5-ns.png`)
  }

  return (
    <Slide>
      <SlideImage source={images} />
      <SlideContent>
        <Title>{intl.formatMessage(messages.title)}</Title>
        <Caption>{intl.formatMessage(messages.caption)}</Caption>
      </SlideContent>
    </Slide>
  )
}

Sixth.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(Sixth)
