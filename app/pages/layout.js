import React, { Component, PropTypes } from 'react'

import { head } from 'react-isomorphic-render'

export default class Layout extends Component
{
	static propTypes =
	{
		children : PropTypes.object.isRequired
	}

	render()
	{
		// Html document metadata

		const title = 'WebApp'
		const description = 'A generic web application boilerplate'

		const meta =
		[
			// <meta charset="utf-8"/>
			{ charset: 'utf-8' },

			// <meta name="..." content="..."/>
			{ name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },

			// <meta property="..." content="..."/>
			{ property: 'og:title',       content: 'International Bodybuilders Club' },
			{ property: 'og:description', content: 'Do some push ups' },
			{ property: 'og:locale',      content: 'ru-RU' }
		]

		const markup =
		(
			<div className="content">
				{head(title, meta)}

				{/* header */}
				<header>
					{/* Navigation */}
					{/*<nav>*/}
						{/* main menu */}
					{/*</nav>*/}
				</header>

				{this.props.children}

				<footer></footer>
			</div>
		)

		return markup
	}
}
