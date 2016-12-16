import React, { Component } from 'react'
import { title } from 'react-isomorphic-render'

export default class Root extends Component {
  render () {
    console.log('---------render')
    const husky = require('../assets/images/husky.jpg')

    const markup = (
      <section className='content'>
        {title('Home')}

        <h1>
          Husky
        </h1>

        <img src={husky} />
      </section>
    )

    return markup
  }
}
