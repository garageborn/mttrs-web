import {OPEN_CATEGORY, CATEGORY_STORIES_RECEIVED} from 'constants/ActionTypes'
import * as API from 'api/index'
import {push} from 'react-router-redux'

export function receiveStories(stories) {
  return {
    type: CATEGORY_STORIES_RECEIVED,
    stories: stories
  }
}

export function openCategory(category) {
  return dispatch => {
    let path = `/categories/${ category.slug }`
    dispatch(push(path))
  }
}

export function getStories(slug) {
  return dispatch => {
    let query = { recent: true, category_slug: slug }
    API.getStories(query, (error, response) => {
      if (error || !response.ok) return
      dispatch(receiveStories(response.body))
    })
  }
}
