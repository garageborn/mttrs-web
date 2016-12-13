import React, { Component } from 'react'
import { Route } from 'react-router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import _flattenDeep from 'lodash/flattenDeep'
import Root from '../containers/Root'

const defaultRoutes = () => {
  return [
    <Route path='/' component={Root} />
  ]
}

const categoriesRoutes = (categories) => {
  return categories.map((category) => {
    return [
      <Route path={`/${category.slug}`} component={Root} categorySlug={category.slug} />
    ]
  })
}

const publishersRoutes = (publishers) => {
  return publishers.map((publisher) => {
    return [
      <Route path={`/${publisher.slug}`} component={Root} publisherSlug={publisher.slug} />
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

export const buildRoutes = (apolloClient) => {
  let routes = new Promise((resolve, reject) => {
    apolloClient.query({ query: routesQuery })
      .then(props => resolve(allRoutes(props.data)))
      .catch(error => reject(error))
    })
  return routes
}
