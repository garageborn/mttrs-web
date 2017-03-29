import {
  REQUEST_VISITED_STORIES,
  VISITED_STORIES_RECEIVED,
  ONBOARDING_SHOWN
} from '../constants/ActionTypes'

let defaultState = {
  onboarding: { shown: false },
  visitedStories: { isFetching: false, isLoaded: false, items: [] }
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case ONBOARDING_SHOWN:
      return {
        ...state,
        onboarding: {
          shown: true
        }
      }
    case REQUEST_VISITED_STORIES:
      return {
        ...state,
        visitedStories: {
          ...state.visitedStories,
          isFetching: true,
          isLoaded: false
        }
      }
    case VISITED_STORIES_RECEIVED:
      return {
        ...state,
        visitedStories: {
          ...state.visitedStories,
          isFetching: false,
          items: action.visitedStories,
          isLoaded: true
        }
      }
    default:
      return state
  }
}
