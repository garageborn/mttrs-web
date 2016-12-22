import localForage from 'localforage'
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
