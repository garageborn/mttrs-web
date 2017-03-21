import React, { PropTypes } from 'react'
import Carousel from 'nuka-carousel'
import Slide from './components/Slide'
import SlideImage from './components/SlideImage'
import SlideContent from './components/SlideContent'
import Dots from './components/Dots'
import Title from './components/Title'
import Logo from '../Logo'
import Caption from './components/Caption'
import Button from './components/Button'
import slide1 from './assets/slide1.svg'
import { carousel } from './styles'

class Onboarding extends React.Component {
  constructor () {
    super()
    this.handleSlide = this.handleSlide.bind(this)
    this.ref = this.ref.bind(this)
  }

  render () {
    return (
      <Carousel ref={this.ref} decorators={this.decorators} style={carousel}>
        <Slide>
          <SlideImage source={slide1} />
          <SlideContent>
            <Title>Welcome To &nbsp; <Logo /></Title>
            <Caption>Your reading time well spent. Read the news that really matters.</Caption>
          </SlideContent>
        </Slide>
        <Slide>
          <SlideImage source={slide1} />
          <SlideContent>
            <Title>Welcome To &nbsp; <Logo /></Title>
            <Caption>Your reading time well spent. Read the news that really matters.</Caption>
          </SlideContent>
        </Slide>
      </Carousel>
    )
  }

  ref (component) {
    return this.carousel = component
  }

  get decorators () {
    return [{
      component: () => this.leftComponent,
      position: 'CenterLeft'
    },
    {
      component: () => this.rightComponent,
      position: 'CenterRight'
    },
    {
      component: () => this.dots,
      position: 'BottomCenter'
    }]
  }

  get dots () {
    if (!this.carousel) return null
    let { state } = this.carousel
    return <Dots count={state.slideCount} active={state.currentSlide} />
  }

  get leftComponent () {
    if (!this.carousel || !this.carousel.state.currentSlide) return null
    return <Button type='left' onClick={() => this.handleSlide('previousSlide')} />
  }

  get rightComponent () {
    let { carousel } = this
    if (!carousel) return null
    let actualSlide = carousel.state.currentSlide + 1
    if (carousel.state.slideCount === actualSlide) return null
    return <Button type='right' onClick={() => this.handleSlide('nextSlide')} />
  }

  handleSlide (direction) {
    return this.carousel[direction]()
  }
}

Onboarding.propTypes = {
}

export default Onboarding
