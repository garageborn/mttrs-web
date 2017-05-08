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

const tagsRoutes = (tags) => {
  return tags.map((tag) => {
    return <Route path={`/${tag.category.slug}/${tag.slug}`} component={Category} slug={tag.category.slug} tagSlug={tag.slug} />
  })
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

const allRoutes = ({ categories, publishers, tags }) => {
  let routes = [
    defaultRoutes(),
    tagsRoutes(tags),
    categoriesRoutes(categories),
    publishersRoutes(publishers)
  ]
  return _flattenDeep(routes)
}

const routesQuery = gql`
  query {
    categories(with_stories: true) { slug }
    tags(with_recent_stories: true) { slug category { slug } }
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
