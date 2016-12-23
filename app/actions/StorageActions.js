// import localForage from 'localforage'
import _uniq from 'lodash/uniq'
import _flatten from 'lodash/flatten'
import {REQUEST_VISITED_STORIES, VISITED_STORIES_RECEIVED} from '../constants/ActionTypes'

export const requestVisitedStories = () => ({
  type: REQUEST_VISITED_STORIES
})

export const receiveVisitedStories = (visitedStories) => ({
  type: VISITED_STORIES_RECEIVED,
  visitedStories
})

export function getVisitedStories () {
  return (dispatch, getState) => {
    if (_server_) return
    if (isVisitedStoriesLoaded(getState)) return
    if (isVisitedStoriesFetching(getState)) return

    const localForage = require('localforage')
    dispatch(requestVisitedStories())
    return localForage.getItem('visitedStories', (error, stories) => {
      return dispatch(receiveVisitedStories(stories || []))
    })
  }
}

export function addVisitedStory (story) {
  return (dispatch, getState) => {
    if (isVisitedStory(getState, story)) return

    const localForage = require('localforage')
    let storyId = parseInt(story.id)
    let stories = _uniq(_flatten([visitedStories(getState).items, storyId]))
    localForage.setItem('visitedStories', stories)
    return dispatch(receiveVisitedStories(stories))
  }
}

function visitedStories (getState) {
  return getState().StorageReducer.visitedStories
}

function isVisitedStoriesFetching (getState) {
  return visitedStories(getState).isFetching
}

function isVisitedStoriesLoaded (getState) {
  return visitedStories(getState).isLoaded
}

function isVisitedStory (getState, story) {
  let storyId = parseInt(story.id)
  return visitedStories(getState).items.indexOf(storyId) !== -1
}
