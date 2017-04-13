import React, { PropTypes } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import Slide from '../../components/Slide'
import SlideImage from '../../components/SlideImage'
import SlideContent from '../../components/SlideContent'
import Title from '../../components/Title'
import Caption from '../../components/Caption'
import Logo from '../../../Logo'

const messages = defineMessages({
  title: {
    id: 'onboarding.first.title'
  },
  caption: {
    id: 'onboarding.first.caption'
  }
})

let images = {
  small: require('./assets/1.png'),
  notSmall: require('./assets/1-ns.png')
}

const First = ({ intl }) => (
  <Slide>
    <SlideImage source={images} />
    <SlideContent>
      <Title>{intl.formatMessage(messages.title)}&nbsp; <Logo /></Title>
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
