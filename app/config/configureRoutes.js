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
    const section = {
      type: 'category',
      model: {
        name: category.name,
        slug: category.slug,
        icon_id: category.icon_id
      }
    }
    return [
      <Route path={`/${category.slug}`} component={Category} section={section} slug={category.slug} />
    ]
  })
}

const publishersRoutes = (publishers) => {
  return publishers.map((publisher) => {
    const section = {
      type: 'publisher',
      model: {
        name: publisher.name,
        slug: publisher.slug,
        icon_id: publisher.icon_id
      }
    }
    return [
      <Route path={`/${publisher.slug}`} component={Publisher} section={section} slug={publisher.slug} />
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
    categories { name slug icon_id }
    publishers { name slug icon_id }
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
