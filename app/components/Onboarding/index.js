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
import { carousel } from './styles'

let slides = [
  {
    images: {
      small: require('./assets/1.png'),
      notSmall: require('./assets/1-ns.png')
    },
    title: `Welcome To`,
    caption: 'Your reading time well spent. Read the news that really matters.'
  },
  {
    images: {
      small: require('./assets/2.png'),
      notSmall: require('./assets/2-ns.png')
    },
    title: `Top News`,
    caption: 'Find the top stories of the day, ordered by the social indexes of the Internet. If its in the mouths of the people, youll find it here.'
  },
  {
    images: {
      small: require('./assets/3.png'),
      notSmall: require('./assets/3-ns.png')
    },
    title: `News summaries`,
    caption: 'Understand the main message of each news in seconds. Summaries are carefully written by our staff.'
  },
  {
    images: {
      small: require('./assets/4.png'),
      notSmall: require('./assets/4-ns.png')
    },
    title: `Keep focus`,
    caption: 'Focus on the information and do not waste time reading the same news several times. If desired, find the publication of your preferred publisher.'
  },
  {
    images: {
      small: require('./assets/5.png'),
      notSmall: require('./assets/5-ns.png')
    },
    title: `Your interest in a click`,
    caption: 'All news are separated into categories. Find everything organized and read about the subjects that interest you most.'
  },
  {
    images: {
      small: require('./assets/6.png'),
      notSmall: require('./assets/6-ns.png')
    },
    title: `News articles in your hands`,
    caption: 'Waiting in line, on the way to work, after lunch or even in the bathroom. At any time or place you keep updated.'
  },
]

class Onboarding extends React.Component {
  constructor () {
    super()
    this.handleSlide = this.handleSlide.bind(this)
    this.ref = this.ref.bind(this)
  }

  render () {
    return (
      <Carousel ref={this.ref} decorators={this.decorators} style={carousel}>
        {slides.map((slide, idx) => {
          return (
            <Slide>
              <SlideImage source={slide.images} />
              <SlideContent>
                {this.renderTitle(slide, idx)}
                <Caption>{slide.caption}</Caption>
              </SlideContent>
            </Slide>
          )
        }
      )}
      </Carousel>
    )
  }

  renderTitle (slide, idx) {
    if (!idx) return <Title>{slide.title}&nbsp; <Logo /></Title>
    return <Title>{slide.title}</Title>
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
