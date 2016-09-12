import { CATEGORIES_RECEIVED } from '../constants/ActionTypes'

let defaultState = {
  categories: []
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case CATEGORIES_RECEIVED:
      return { ...state, categories: action.categories }
    default:
      return state
  }
}
