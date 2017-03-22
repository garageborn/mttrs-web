import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import Slide from '../../components/Slide'
import SlideImage from '../../components/SlideImage'
import SlideContent from '../../components/SlideContent'
import Title from '../../components/Title'
import Caption from '../../components/Caption'

const messages = defineMessages({
  title: {
    id: 'onboarding.sixth.title'
  },
  caption: {
    id: 'onboarding.sixth.caption'
  }
})

let images = {
  small: require('./assets/6.png'),
  notSmall: require('./assets/6-ns.png')
}

const First = ({ intl }) => (
  <Slide>
    <SlideImage source={images} />
    <SlideContent>
      <Title>{intl.formatMessage(messages.title)}</Title>
      <Caption>{intl.formatMessage(messages.caption)}</Caption>
    </SlideContent>
  </Slide>
)

First.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

export default injectIntl(First)
