import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Root from '../containers/Root'

const defaultRoutes = () => {
  return [
    <IndexRoute
      component={Root}
      section={{type: 'home', model: {}}}
    />
  ]
}

const categoriesRoutes = (categories) => {
  return categories.map((category) => {
    return (
      <Route
        path={`/${category.slug}`}
        component={Root}
        categorySlug={category.slug}
        section={{type: 'category', model: category}}
      />
    )
  })
}

const publishersRoutes = (publishers) => {
  return publishers.map((publisher) => {
    return (
      <Route
        key={publisher.slug}
        path={`/${publisher.slug}`}
        component={Root}
        section={{type: 'publisher', model: publisher}}
      />
    )
  })
}

const allRoutes = ({ categories, publishers }) => {
  return (
    <Route path='/'>
      { defaultRoutes() }
      { categoriesRoutes(categories) }
      { publishersRoutes(publishers) }
    </Route>
  )
}

export default function () {
  return allRoutes({
    categories: [
      {slug: 'technology'},
      {slug: 'entertainment'},
      {slug: 'humor'},
      {slug: 'science'},
      {slug: 'gaming'},
      {slug: 'sports'},
      {slug: 'world-news'},
      {slug: 'business'}
    ],
    publishers: [{}]
  })
}
