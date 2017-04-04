import _uniq from 'lodash/uniq'
import _flatten from 'lodash/flatten'
import {
  REQUEST_VISITED_STORIES,
  VISITED_STORIES_RECEIVED,
  SHOW_ONBOARDING,
  CLOSE_MODAL,
  ONBOARDING_SHOWN
 } from '../constants/ActionTypes'
import localForage from 'localforage'

export const requestVisitedStories = () => ({
  type: REQUEST_VISITED_STORIES
})

export const receiveVisitedStories = (visitedStories) => ({
  type: VISITED_STORIES_RECEIVED,
  visitedStories
})

export const showOnboarding = () => ({
  type: SHOW_ONBOARDING
})

export const hideOnboarding = () => ({
  type: CLOSE_MODAL
})

export const onboardingShown = () => ({
  type: ONBOARDING_SHOWN
})

export function getOnboardingStatus () {
  return (dispatch, getState) => {
    if (_server_) return
    return localForage.getItem('onboardingShown', (error, shown) => {
      if (error) return
      if (shown) return dispatch(onboardingShown())
      return dispatch(showOnboarding())
    })
  }
}

export function handleOnboardingFinish () {
  return (dispatch, getState) => {
    localForage.setItem('onboardingShown', true)
    return dispatch(hideOnboarding())
  }
}

export function getVisitedStories () {
  return (dispatch, getState) => {
    if (_server_) return
    if (isVisitedStoriesLoaded(getState)) return
    if (isVisitedStoriesFetching(getState)) return

    dispatch(requestVisitedStories())
    return localForage.getItem('visitedStories', (error, stories) => {
      if (error) return
      return dispatch(receiveVisitedStories(stories || []))
    })
  }
}

export function addVisitedStory (story) {
  return (dispatch, getState) => {
    if (isVisitedStory(getState, story)) return

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
