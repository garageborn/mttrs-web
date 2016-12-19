import { OPEN_MODAL } from '../constants/ActionTypes'

let defaultState = {
  modal: {
    isOpen: false,
    story: {}
  }
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modal: {
          ...state.menu,
          isOpen: true
        }
      }
    default:
      return state
  }
}
