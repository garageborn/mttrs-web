/* eslint-disable react/jsx-no-bind, no-return-assign */
import React, { PropTypes } from 'react'
import Carousel from 'nuka-carousel'
import { StorageActions } from '../../actions/index'
import Dots from './components/Dots'
import Button from './components/Button'
import First from './pages/01-First'
import Second from './pages/02-Second'
import Third from './pages/03-Third'
import Fourth from './pages/04-Fourth'
import Fifth from './pages/05-Fifth'
import Sixth from './pages/06-Sixth'
import { carousel } from './styles'

class Onboarding extends React.Component {
  constructor () {
    super()
    this.handleSlide = this.handleSlide.bind(this)
    this.finishOnboarding = this.finishOnboarding.bind(this)
    this.ref = this.ref.bind(this)
  }

  render () {
    return (
      <Carousel ref={this.ref} edgeEasing='linear' width='100%' decorators={this.decorators} style={carousel}>
        <First />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Sixth />
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
    let type = 'right'
    let onClick = () => this.handleSlide('nextSlide')
    if (carousel.state.slideCount === actualSlide) {
      type = 'check'
      onClick = () => this.finishOnboarding()
    }
    return <Button type={type} onClick={onClick} />
  }

  finishOnboarding () {
    return this.props.dispatch(StorageActions.handleOnboardingFinish())
  }

  handleSlide (direction) {
    return this.carousel[direction]()
  }
}

Onboarding.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default Onboarding
