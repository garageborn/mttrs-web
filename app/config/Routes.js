import React from 'react'
import { Route } from 'react-router'
import gql from 'graphql-tag'
import _flattenDeep from 'lodash/flattenDeep'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Publisher from '../pages/Publisher'

const defaultRoutes = () => {
  return [
    <Route path='/' component={Home} />
  ]
}

const categoriesRoutes = (categories) => {
  return categories.map((category) => {
    return [
      <Route
        path={`/${category.slug}`}
        component={Category}
        slug={category.slug}
      />
    ]
  })
}

const publishersRoutes = (publishers) => {
  return publishers.map((publisher) => {
    return [
      <Route
        path={`/${publisher.slug}`}
        component={Publisher}
        slug={publisher.slug}
      />
    ]
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
    categories { slug }
    publishers { slug }
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
