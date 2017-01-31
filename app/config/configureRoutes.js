import React from 'react'
import { Route } from 'react-router'
import gql from 'graphql-tag'
import _flattenDeep from 'lodash/flattenDeep'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Publisher from '../pages/Publisher'
import Publishers from '../pages/Publishers'
import Link from '../pages/Link'

const defaultRoutes = () => {
  return [
    <Route path='/' component={Home} />,
    <Route path='/link/:slug' component={Link} />,
    <Route path='/publishers' component={Publishers} />
  ]
}

const categoriesRoutes = (categories) => {
  return categories.map((category) => {
    return <Route path={`/${category.slug}`} component={Category} slug={category.slug} />
  })
}

const publishersRoutes = (publishers) => {
  return publishers.map((publisher) => {
    return <Route path={`/${publisher.slug}`} component={Publisher} slug={publisher.slug} />
  })
}

const allRoutes = ({ categories, publishers }) => {
  let routes = [
    defaultRoutes(),
    categoriesRoutes(categories),
    publishersRoutes(publishers)
  ]
  return _flattenDeep(routes)
}

const routesQuery = gql`
  query {
    categories(with_stories: true) { slug }
    publishers(with_stories: true) { slug }
  }
`

export default function (apolloClient) {
  let routes = new Promise((resolve, reject) => {
    apolloClient.query({ query: routesQuery })
      .then(props => resolve(allRoutes(props.data)))
      .catch(error => reject(error))
  })
  return routes
}
