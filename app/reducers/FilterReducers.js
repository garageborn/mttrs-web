import { SET_FILTER } from '../constants/ActionTypes'

let defaultState = {
  filter: null
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filter: action.filter }
    default:
      return state
  }
}
